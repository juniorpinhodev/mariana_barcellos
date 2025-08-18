import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState(''); // New state for custom messages

  // Initialize EmailJS once when the component mounts
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
  }, []); // Empty dependency array ensures it runs only once

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.phone.trim()) {
        newErrors.phone = 'Telefone é obrigatório';
    } else if (!/^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/.test(formData.phone)) {
        newErrors.phone = 'Telefone inválido (ex: (99) 99999-9999)';
    }
    if (!formData.message.trim()) newErrors.message = 'Mensagem é obrigatória';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitStatus(null);
      setSubmitMessage(''); // Clear previous messages

      // 1. Enviar email com EmailJS
      try {
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form.current
        );

        // 2. Enviar para a API para salvar no Google Sheets
        try {
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              nome: formData.name,
              email: formData.email,
              telefone: formData.phone,
              mensagem: formData.message,
            }),
          });

          const data = await response.json(); // Parse response JSON

          // Always show success if email was sent, regardless of sheets outcome for duplicates
          if (response.ok || response.status === 409) { // Treat 409 as success for user feedback
            setSubmitStatus('success');
            setSubmitMessage('Mensagem enviada com sucesso!');
            setFormData({ name: '', email: '', phone: '', message: '' });
          } else { // Other errors from API
            setSubmitStatus('error');
            setSubmitMessage(data.message || 'Erro ao enviar mensagem. Por favor, tente novamente mais tarde.');
          }

        } catch (sheetsError) {
          console.error('Erro no Google Sheets:', sheetsError);
          setSubmitStatus('error'); // Generic error for network/parsing issues
          setSubmitMessage('Erro ao enviar mensagem. Por favor, tente novamente mais tarde.');
        }

      } catch (emailError) {
        console.error('Erro ao enviar email com EmailJS:', emailError);
        setSubmitStatus('email_error');
        setSubmitMessage('Erro ao enviar email. Por favor, tente novamente mais tarde.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <form ref={form} className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <input 
            type="text" 
            className={`input ${errors.name ? 'border-red-500' : ''}`} 
            placeholder="Nome Completo" 
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name}</span>}
        </div>
        
        <div className="flex flex-col">
          <input 
            type="text" 
            className={`input ${errors.email ? 'border-red-500' : ''}`} 
            placeholder="Email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
        </div>
        
        <div className="flex flex-col">
          <input 
            type="text" 
            className={`input ${errors.phone ? 'border-red-500' : ''}`} 
            placeholder="Telefone" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="text-red-500 text-sm mt-1">{errors.phone}</span>}
        </div>
        
        <div className="flex flex-col">
          <textarea 
            className={`textarea mb-2 ${errors.message ? 'border-red-500' : ''}`} 
            placeholder="Digite sua mensagem" 
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message}</span>}
        </div>
        
        {submitStatus === 'success' && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{submitMessage}</span>
          </div>
        )}
        
        {(submitStatus === 'error' || submitStatus === 'email_error') && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{submitMessage}</span>
          </div>
        )}
        
        <button 
          type="submit" 
          className="btn self-start" 
          disabled={isSubmitting}
        >
            {isSubmitting ? 'Enviando...' : 'Envie a mensagem'}
        </button>
    </form>
  )
};

export default Form;

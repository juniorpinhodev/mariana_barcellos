const Form = () => {
  return (
    <form className="flex flex-col gap-4">
        <input type="text" className="input" placeholder="Nome Completo" />
        <input type="text" className="input" placeholder="email" />
        <input type="text" className="input" placeholder="Telefone" />
        <textarea className="textarea mb-2" placeholder="Digite sua mensagem" />
        <button type="submit" className="btn self-start">
            Envie a mensagem
        </button>
    </form>
  )
};

export default Form
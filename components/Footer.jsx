
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>© 2025 Mariana F. Barcellos — Todos os direitos reservados</p>
        <p>
          Desenvolvido por{' '}
          <Link
            href="https://www.juniorpinho.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Junior Pinho | DEV
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

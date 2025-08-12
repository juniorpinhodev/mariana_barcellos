import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-primary/95 backdrop-blur-sm border-t border-secondary-100/20 text-secondary/80">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-xs font-secondary text-secondary/70">
              © 2025 Mariana F. Barcellos — Todos os direitos reservados
            </p>
          </div>

          {/* Developer Credit */}
          <div className="text-center md:text-right">
            <p className="text-xs text-secondary/60">
              Desenvolvido por{' '}
              <Link
                href="https://www.juniorpinho.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 
                           transition-colors duration-300 ease-in-out
                           hover:underline underline-offset-2"
              >
                Junior Pinho | DEV
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
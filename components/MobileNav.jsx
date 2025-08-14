"use client";
import { motion } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import Socials from "./Socials";

const links = [
    {
        href: "/",
        name: "Home",
    },
    {
        href: "/sobre",
        name: "Sobre"
    },
    {
        href: "/servicos",
        name: "Serviços"
    },
    {
        href: "/contato",
        name: "Contato",
    },
];

const containerVariants = {
    hidden: {
        x: "100%",
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "tween",
            duration: 0.3,
            ease: "easeOut",
            staggerChildren: 0.08,
            delayChildren: 0.1,
        }
    },
    exit: {
        x: "100%",
        opacity: 0,
        transition: {
            type: "tween",
            duration: 0.25,
            ease: "easeIn",
        }
    }
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "tween",
            duration: 0.3,
            ease: "easeOut",
        }
    }
};

const MobileNav = ({ setMobileNav }) => {
    const pathname = usePathname();
    const navRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setMobileNav(false);
            }
        };

        document.body.style.overflow = 'hidden';
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);

        return () => {
            document.body.style.overflow = 'unset';
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [setMobileNav]);

    return (
        <motion.nav 
            ref={navRef}
            className="relative flex flex-col h-full bg-white shadow-2xl border border-gray-100"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {/* Header com botão de fechar elegante */}
            <motion.div 
                className="flex items-center justify-start p-6 pb-4 border-b border-gray-100"
                variants={itemVariants}
            >
                <motion.button
                    onClick={() => setMobileNav(false)}
                    className="
                        relative flex items-center justify-center w-12 h-12 
                        bg-gradient-to-br from-gray-50 to-gray-100 
                        rounded-full shadow-lg border border-gray-200
                        text-gray-600 hover:text-red-500 
                        transition-all duration-300 ease-out
                        hover:shadow-xl hover:border-red-200
                        group overflow-hidden
                    "
                    whileHover={{ 
                        scale: 1.1, 
                        rotate: 90,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    {/* Efeito de background animado no hover */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100 rounded-full opacity-0 group-hover:opacity-100"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                    
                    {/* Ícone com animação */}
                    <motion.div
                        className="relative z-10"
                        initial={{ rotate: 0 }}
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <IoCloseOutline className="text-xl" />
                    </motion.div>
                    
                    {/* Anel de destaque */}
                    <motion.div
                        className="absolute inset-0 rounded-full border-2 border-primary/20 opacity-0 group-hover:opacity-100"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                    />
                </motion.button>
            </motion.div>

            {/* Menu principal */}
            <div className="flex-1 px-6 py-8 flex items-center justify-center">
                <motion.ul className="space-y-2 w-full max-w-xs">
                    {links.map((link, index) => {
                        const isActive = pathname === link.href;
                        return (
                            <motion.li key={index} variants={itemVariants}>
                                <Link 
                                    href={link.href} 
                                    className={`
                                        block px-4 py-4 rounded-xl text-lg font-secondary font-medium text-center
                                        transition-all duration-200 relative group
                                        ${isActive 
                                            ? 'bg-primary/8 text-primary border-l-4 border-primary' 
                                            : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                                        }
                                    `}
                                    onClick={() => setMobileNav(false)}
                                >
                                    <motion.span 
                                        className="relative z-10 tracking-wide"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * index, duration: 0.3 }}
                                    >
                                        {link.name}
                                    </motion.span>
                                    {!isActive && (
                                        <motion.div 
                                            className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                            initial={{ scale: 0.8 }}
                                            whileHover={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                        />
                                    )}
                                </Link>
                            </motion.li>
                        );
                    })}
                </motion.ul>
            </div>

            {/* Footer com redes sociais */}
            <motion.div
                variants={itemVariants}
                className="px-6 py-4 border-t border-gray-100 bg-gray-50"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <motion.div 
                    className="text-center mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                >
                    <p className="text-xs text-gray-500 font-secondary mb-2">Conecte-se</p>
                </motion.div>
                
                {/* Redes sociais em linhas separadas */}
                <motion.div
                    className="flex flex-col items-center space-y-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.3, type: "spring" }}
                >
                    <motion.div
                        className="flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        <FaInstagram className="text-pink-500 text-sm" />
                        <p className="text-xs text-gray-600 font-secondary tracking-wide">
                            /mariespacovip
                        </p>
                    </motion.div>
                    
                    <motion.div
                        className="flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        <FaInstagram className="text-pink-500 text-sm" />
                        <p className="text-xs text-gray-600 font-secondary tracking-wide">
                            /fisiomarianafbarcellos
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.nav>
    );
};

export default MobileNav;
import Link from "next/link";
import { useContext } from "react";
import { CursorContext } from "./CursorContext"; 
import { usePathname } from "next/navigation";

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
]


const Nav = () => {
    const pathname = usePathname();
  return (
  <nav>
    <div className="container mx-auto flex gap-8">
        {links.map((link, index)=> {
            return (
                <Link 
                href={link.href} 
                key={index} 
                className={`${
                    pathname === link.href && "border-b-2 border-accent-100"
                } uppercase`}>
                    {link.name}
                </Link>
            );
        })}
    </div>
  </nav>
  );
};

export default Nav
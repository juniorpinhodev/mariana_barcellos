import Link  from "next/link";
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Socials = ({ containerStyles }) => {
  return (
    <ul className={`${containerStyles}`}>
         <li>
            <Link 
                href="https://www.instagram.com/mariespacovip" 
                target="_blank"
                rel="noopener noreferrer"
                >
            <FaInstagram/>
            </Link>
        </li>
        <li>
            <Link 
                href="https://www.instagram.com/fisiomarianafbarcellos" 
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaInstagram/>
            </Link>
        </li>
        {/* <li>
            <Link 
                href="https://www.facebook.com/mariana.fernandes.barcellos"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaFacebook />
            </Link>
        </li> */}
        {/* <li>
            <Link 
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaYoutube />
            </Link>
        </li> */}
    </ul>
  )
}

export default Socials
import "./styles.css";
import {
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
    FaWhatsapp,
} from "react-icons/fa6";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="icons">
                <a href="https://www.instagram.com/mariaclara.amorim_/"><FaInstagram /></a>
                <a href="https://api.whatsapp.com/send?phone=77999313620"><FaWhatsapp /></a>
                <a href="https://github.com/MariaClaraAmorim"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/mariaclara-amorim"><FaLinkedinIn /></a>
                <p className="company-name">
                    &#169;2024 | Desenvolvido por:  &lt;DEV Maria/&gt; - Maria Clara Amorim. | Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
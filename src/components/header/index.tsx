import React from "react";
import "./styles.css";
import Logo from "../../../public/assets/img/Logo.jpeg";
const Header: React.FC = () => {
    return (
        <>
            <header>
                <nav>
                    <div className="logo-container">
                        <img className="logo" src={Logo} alt="Logo" />
                    </div>
                    {/*    <div>
                        <div className="nav-container">
                            <ul className="nav-tabs">
                                <li className="nav-tab">
                                    <a href="#cardapio">Cardápio</a>
                                </li>
                                <li className="nav-tab">
                                    <a href="#contato">Contato</a>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                </nav>
            </header>
        </>
    );
}

export default Header;

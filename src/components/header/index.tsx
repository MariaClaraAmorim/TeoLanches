import React from "react";
import "./styles.css";

const Header: React.FC = () => {
    return (
        <>
            <header>
                <nav>
                    <div className="logo-container">
                        <img className="logo" src="public/img/Logo.jpeg" alt="Logo" />
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

import { useEffect, useState } from 'react';
import menuData from './menuData.json';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { VscChromeClose } from "react-icons/vsc";

import "./styles.css";

const Menu = () => {
    const [cartItems, setCartItems] = useState<MenuItem[]>([]);
    const [snacks, setSnacks] = useState<MenuItem[]>([]);
    const [specialSnacks, setSpecialSnacks] = useState<MenuItem[]>([]);
    const [additional, setAdditional] = useState<AdditionalItem[]>([]);
    const [drinks, setDrinks] = useState<DrinksItem[]>([]);
    const [showCart, setShowCart] = useState(false);
    const [activeTab, setActiveTab] = useState('Lanches');

    useEffect(() => {
        setSnacks(menuData.tradicionais);
        setSpecialSnacks(menuData.especiais);
        setAdditional(menuData.additional);
        setDrinks(menuData.drinks);
    }, []);

    const addToCart = (item: MenuItem) => {
        setCartItems(prevCartItems => [...prevCartItems, item]);
    };

    const removeFromCart = (index: number) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems);
    };

    const sendOrder = () => {
        const orderMessage = cartItems.map(item => `${item.name} - R$ ${item.price}`).join('\n');
        const whatsappLink = `https://wa.me/77999525284?text=${encodeURIComponent(orderMessage)}`;
        window.open(whatsappLink, '_blank');
    };

    // Dentro do componente onde você está gerenciando o carrinho
    const [cartCount, setCartCount] = useState(0);

    // Função para calcular o número total de itens no carrinho
    const calculateCartCount = () => {
        let totalCount = cartItems.length; // Aqui, contamos o tamanho do array de itens do carrinho
        setCartCount(totalCount);
    };

    // Chame a função calculateCartCount sempre que o carrinho mudar
    useEffect(() => {
        calculateCartCount();
    }, [cartItems])
    // Função para alternar a guia ativa
    const handleTabClick = (tabName: string) => {
        setActiveTab(tabName);
    };

    return (
        <div className="containerMenu">
            {showCart && (
                <div className="menu-sidebar">
                    <div className="head">
                        <h2>Carrinho</h2>
                        <button onClick={() => setShowCart(false)}><VscChromeClose /></button>
                    </div>
                    <ul>
                        {cartItems.map((item, index) => (

                            <li key={index}>
                                {item.name} - R${item.price}
                                <button className="button" onClick={() => removeFromCart(index)}>Remover do Carrinho</button>
                            </li>

                        ))}
                    </ul>
                    {cartItems.length === 0 && <p>Carrinho vazio</p>}
                    {cartItems.length > 0 && <button className="button" onClick={sendOrder}>Fazer Pedido</button>}
                </div>
            )}

            <h1 className="titleMenu">Cardápio</h1>

            <MdOutlineShoppingCart title='Ver carrinho' className="btn cart-icon" onClick={() => setShowCart(!showCart)} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}

            {/* Barra de navegação das guias */}
            <div className="tab-navigation">
                <button className={activeTab === 'Lanches' ? 'active' : ''} onClick={() => handleTabClick('Lanches')}>Lanches</button>
                <button className={activeTab === 'LanchesEspeciais' ? 'active' : ''} onClick={() => handleTabClick('LanchesEspeciais')}>Lanches Especiais</button>
                <button className={activeTab === 'Adicional' ? 'active' : ''} onClick={() => handleTabClick('Adicional')}>Adicional</button>
                <button className={activeTab === 'Bebidas' ? 'active' : ''} onClick={() => handleTabClick('Bebidas')}>Bebidas</button>
            </div>

            {/* Conteúdo da guia ativa */}
            {activeTab === 'Lanches' && (
                <ul className="cards-container">
                    {snacks.map((item, index) => (
                        <li key={index} className="card">
                            <div>
                                <img className="card-media" src={item.image} alt={item.name} />
                            </div>
                            <div className="card-description">
                                <div className="about-hamburguer">
                                    <div className="infos">
                                        <p className="hamburguer-name">{item.name}</p>
                                        <p className="hamburguer-description">{item.description}</p>
                                    </div>
                                    <div className="hamburguer-infos">
                                        <p className="hamburguer-price">R${item.price}</p>
                                        <p className="cart-add">
                                            <button onClick={() => addToCart(item)}>
                                                <MdOutlineShoppingCart className="btn" />
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            {activeTab === 'LanchesEspeciais' && (
                <ul className="cards-container">
                    {specialSnacks.map((item, index) => (
                        <li key={index} className="card">
                            <div>
                                <img className="card-media" src={item.image} alt={item.name} />
                            </div>
                            <div className="card-description">
                                <div className="about-hamburguer">
                                    <div className="infos">
                                        <p className="hamburguer-name">{item.name}</p>
                                        <p className="hamburguer-description">{item.description}</p>
                                    </div>
                                    <div className="hamburguer-infos">
                                        <p className="hamburguer-price">R${item.price}</p>
                                        <p className="cart-add">
                                            <button onClick={() => addToCart(item)}>
                                                <MdOutlineShoppingCart className="btn" />
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            {activeTab === 'Adicional' && (
                <ul className="cards-container">
                    {additional.map((item, index) => (
                        <li key={index} className="card">
                            <div className="card-description">
                                <div className="about-hamburguer">
                                    <div className="infos">
                                        <p className="hamburguer-name">{item.name}</p>
                                    </div>
                                    <div className="hamburguer-infos">
                                        <p className="hamburguer-price">R${item.price}</p>
                                        <p className="cart-add">
                                            <button onClick={() => addToCart(item)}>
                                                <MdOutlineShoppingCart className="btn" />
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            {activeTab === 'Bebidas' && (
                <ul className="cards-container">
                    {drinks.map((item, index) => (
                        <li key={index} className="card">
                            <div className="card-description">
                                <div className="about-hamburguer">
                                    <div className="infos">
                                        <p className="hamburguer-name">{item.name}</p>
                                    </div>
                                    <div className="hamburguer-infos">
                                        <p className="hamburguer-price">R${item.price}</p>
                                        <p className="cart-add">
                                            <button onClick={() => addToCart(item)}>
                                                <MdOutlineShoppingCart className="btn" />
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Menu;

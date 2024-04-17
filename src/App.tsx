import Card from './components/Card';
import SEO from './components/SEO';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import Location from './components/location';
import Menu from './components/menu';

function App() {

    return (
        <>
            <SEO title="Teo lanches" description="Onde a magia da hamburguer encontra a paixão pela qualidade." />
            <Header />
            <Home />
            <Card />
            <Menu />
            <Location />
            <Footer />
        </>
    );
}

export default App;

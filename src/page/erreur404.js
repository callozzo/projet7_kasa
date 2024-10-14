import { Header, Footer } from './home';
import { Link } from 'react-router-dom';
import './assets/style/index.scss';

function Erreur() {
    return (
        <div>
            <Header />
            <Chiffre />
            <RetourAccueil />
            <Footer />
        </div>
    )
}

function Chiffre() {
    return (
        <div className='centrer redColor'>
            <h2>404</h2>
            <h3>Oups! La page que vous demandez n'existe pas.</h3>
        </div>
    )
}

function RetourAccueil() {
    return (
        <Link className='centrer blackColor' to='/'>Retourner sur la page d'accueil</Link>
    )
}

export default Erreur;
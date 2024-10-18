import Header from './assets/components/header';
import Footer from './assets/components/footer';
import { Link } from 'react-router-dom';
import './assets/style/index.scss';

function Erreur() {
    return (
        <div>
            <Header />
            <PageNotFound />
            <Footer />
        </div>
    )
}

function PageNotFound() {
    return (
        <div className='centrer'>
            <div className='redColor'>
                <h1>404</h1>
                <h3>Oups! La page que vous demandez n'existe pas.</h3>
            </div>
            <Link className='centrer blackColor' to='/'>Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Erreur;
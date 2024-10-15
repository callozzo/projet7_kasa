import { Header, Footer } from './home';
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
                <h2>404</h2>
                <h3>Oups! La page que vous demandez n'existe pas.</h3>
            </div>
            <Link className='centrer blackColor' to='/'>Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Erreur;
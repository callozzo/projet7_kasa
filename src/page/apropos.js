import { Header, Footer }from './home';
import './assets/index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Apropos() {
    return (
        <div>
            <Header />
            <Nav />
            <Body />
            <Footer />
        </div>
    )
}

function Nav() {
    return (
        <div className='background'>
        </div>
    )
}

function Body() {
    return (
        <div className='categories'>
            <Fiabilité />
            <Respect />
            <Service />
            <Sécurité />
        </div>
    )
}

function Fiabilité() {
    return (
        <div>
            <h1>Fiabilité</h1>
            <FontAwesomeIcon icon="fa-solid fa-chevron-up" />
        </div>
    )
}

function Respect() {
    return (
        <div>
            <h1>Respect</h1>
            <FontAwesomeIcon icon="fa-solid fa-chevron-up" />
        </div>
    )
}

function Service() {
    return (
        <div>
            <h1>Service</h1>
            <FontAwesomeIcon icon="fa-solid fa-chevron-up" />
        </div>
    )
}

function Sécurité() {
    return (
        <div>
            <h1>Sécurité</h1>
            <FontAwesomeIcon icon="fa-solid fa-chevron-up" />
        </div>
    )
}

export default Apropos;
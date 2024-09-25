import { Header, Footer }from './home';
import './assets/index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

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
        <div className='bodyApropos'>
            <Fiabilité />
            <Respect />
            <Service />
            <Sécurité />
        </div>
    )
}

function Fiabilité() {
    return (
        <div className='categories'>
            <h1>Fiabilité</h1>
            <ChevronUp />
        </div>
    )
}

function Respect() {
    return (
        <div className='categories'>
            <h1>Respect</h1>
            <ChevronUp />
        </div>
    )
}

function Service() {
    return (
        <div className='categories'>
            <h1>Service</h1>
            <ChevronUp />
        </div>
    )
}

function Sécurité() {
    return (
        <div className='categories'>
            <h1>Sécurité</h1>
            <ChevronUp />
        </div>
    )
}

function ChevronUp() {

    const [rotate, setRotate] = useState(false);

    const handleClick = () => {
        setRotate(!rotate);
    };

    return (
        <FontAwesomeIcon icon={faChevronUp} className={`deroule ${rotate ? 'rotate' : ''}`} onclick = {handleClick} />
    );
}

export default Apropos;
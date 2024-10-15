import { Header, Footer }from './home';
import './assets/style/index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

function Apropos() {
    return (
        <div>
            <Header />
            <BannerApropos />
            <Body />
            <Footer />
        </div>
    )
}

function BannerApropos() {
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
    const [collapse, setCollapse] = useState(false);

    const handleCollapse = () => {
        setCollapse(!collapse); 
    };

    return (
        <div className='categoriesBox'>
            <div className='categories'>
                <h1>Fiabilité</h1>
                <ChevronUp collapse={collapse} handleCollapse={handleCollapse} />
            </div>
            <div className={`collapseContent ${collapse ? 'slide' : ''}`}>
                <p>
                    Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                </p> 
            </div>
        </div>
    );
}

function Respect() {
    const [collapse, setCollapse] = useState(false);

    const handleCollapse = () => {
        setCollapse(!collapse); 
    };

    return (
        <div className='categoriesBox'>
            <div className='categories'>
                <h1>Respect</h1>
                <ChevronUp collapse={collapse} handleCollapse={handleCollapse} />
            </div>
            <div className={`collapseContent ${collapse ? 'slide' : ''}`}>
                <p>
                    La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entrainera une exclusion de notre plateforme.
                </p> 
            </div>
        </div>
    );
}

function Service() {
    const [collapse, setCollapse] = useState(false);

    const handleCollapse = () => {
        setCollapse(!collapse); 
    };

    return (
        <div className='categoriesBox'>
            <div className='categories'>
                <h1>Service</h1>
                <ChevronUp collapse={collapse} handleCollapse={handleCollapse} />
            </div>
            <div className={`collapseContent ${collapse ? 'slide' : ''}`}>
                <p>
                    La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.
                </p>
            </div>
        </div>
    );
}

function Sécurité() {
    const [collapse, setCollapse] = useState(false);

    const handleCollapse = () => {
        setCollapse(!collapse); 
    };

    return (
        <div className='categoriesBox'>
            <div className='categories'>
                <h1>Sécurité</h1>
                <ChevronUp collapse={collapse} handleCollapse={handleCollapse} />
            </div>
            <div className={`collapseContent ${collapse ? 'slide' : ''}`}>
                <p>
                    La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                </p>
            </div>
        </div>
    );
}

function ChevronUp({ collapse, handleCollapse }) {
    return (
        <FontAwesomeIcon 
            icon={faChevronUp} 
            className={`deroule ${collapse ? 'rotate' : ''}`}  // Ajoute la classe rotate seulement quand collapse est true
            onClick={handleCollapse} 
        />
    );
}

export { ChevronUp };
export default Apropos;

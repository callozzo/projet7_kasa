import Header from './assets/components/header';
import Footer from './assets/components/footer';
import CollapseBox from './assets/components/collapse';
import './assets/style/index.scss';
import React from 'react';

function Apropos() {
    return (
        <div>
            <Header />
            <BannerApropos />
            <Categories />
            <Footer />
        </div>
    )
}

// Fonction de la bannière de la page a propos
function BannerApropos() {
    return (
        <div className='background'>
        </div>
    )
}

// Fonction des catégories pour la page a propos 
function Categories() {
    return (
        <div className='bodyApropos'>
            <CollapseBox title="Fiabilité">
                <p>
                    Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                </p>
            </CollapseBox>
            <CollapseBox title="Respect">
                <p>
                    La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entrainera une exclusion de notre plateforme.
                </p>
            </CollapseBox>
            <CollapseBox title="Service">
                <p>
                    La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.
                </p>
            </CollapseBox>
            <CollapseBox title="Sécurité">
                <p>
                    La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                </p>
            </CollapseBox>
        </div>
    )
}

export default Apropos;

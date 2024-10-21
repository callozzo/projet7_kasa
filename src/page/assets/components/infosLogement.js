import '../style/index.scss';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import CollapseBox from './collapse';
import logementData from '../logement.json';

// Fonction pour la mise en page de la description et infos logements et proprietaire
function InfosLogements({ rating }) {
    const { id } = useParams();
    const logement = logementData.find(l => l.id === id);

    // Génération des étoiles pleines et vides sur la base de 5 étoiles
    const totalStars = 5;
    const fullStars = Array.from({ length: rating }, (_, index) => (
        <FontAwesomeIcon key={`full-${index}`} icon={faStar} className='full-star' />
    ));
    const emptyStars = Array.from({ length: totalStars - rating }, (_, index) => (
        <FontAwesomeIcon key={`empty-${index}`} icon={faStar} className='empty-star' />
    ));

    console.log('Rating:', rating);

    return (
        <div>
            <div className='infos'>
                <div className='infosLogement'>
                    <h3>{logement.title}</h3>
                    <p>{logement.location}</p>
                    <ul className='tags'>
                        {logement.tags.map((tags, index) => (
                            <li key={index}>{tags}</li>
                        ))}
                    </ul>
                </div>
                <div className='infosHost'>
                    <div className='host'>
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} alt={logement.host.name} />
                    </div>
                    <div className='rating'>
                        <div className='fullStar'>
                            {fullStars}
                        </div>
                        <div className='emptyStar'>
                            {emptyStars}
                        </div>
                    </div>
                </div>
            </div>
            <div className='details'>
                <CollapseBox title="Description">
                    <p>{logement.description}</p>
                </CollapseBox>
                <CollapseBox title="Équipements">
                    <ul>
                        {logement.equipments.map((equipement, index) => (
                            <li key={index}>{equipement}</li>
                        ))}
                    </ul>
                </CollapseBox>
            </div>
        </div>
        
    );
}



export default InfosLogements;
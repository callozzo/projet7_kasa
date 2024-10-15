import { Header, Footer } from './home';
import { ChevronUp } from './apropos';
import { useParams } from 'react-router-dom';
import './assets/style/index.scss';
import Chevrongauche from './assets/images/ChevronGauche.svg';
import Chevrondroite from './assets/images/ChevronDroite.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar  } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import logementData from './assets/logement.json';
import Erreur from './erreur404'



function Logement() {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const logement = logementData.find(l => l.id === id); // Trouve le logement correspondant à l'ID

  // Si le logement n'est pas trouvé, afficher un message d'erreur
  if (!logement) {
    return <Erreur />;
  }

  return (
    <div className="logement-detail">
      <Header />
      <Carrousel pictures={logement.pictures} />
      <div className='infos'>
        <div className='infosLogement'>
          <Title />
          <Location />
          <Tags />
        </div>
        <div className='infosHost'>
          <Host />
          <Rate rating={logement.rating} />
        </div>
      </div>
      <div className='details'>
        <Description />
        <Equipements />
      </div>
      <Footer />
    </div>
  );
}

//Fonction du carrousel
function Carrousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };
  
  if (pictures.length === 1) {
    
  }

  return (
    <div>
      <div className="carrousel">
        <div className="faLeft" onClick={prevSlide}>
          <img src={Chevrongauche} alt='chevron gauche' />
        </div>
        <img src={pictures[currentIndex]} alt={`Image du logement ${currentIndex + 1}`} />
        <p className='dot'>{currentIndex + 1} / {pictures.length}</p>
        <div className="faRight" onClick={nextSlide}>
          <img src={Chevrondroite} alt='chevron droit' />
        </div>
      </div>
    </div>
  );
}

function Title() {
  const { id } = useParams();
  const logement = logementData.find(l => l.id === id);

  return (
  <h3>{logement.title}</h3>
  )
}

function Location() {
  const { id } = useParams();
  const logement = logementData.find(l => l.id === id);

  return(
    <p>{logement.location}</p>
  )
}

function Host() {
  const { id } = useParams();
  const logement = logementData.find(l => l.id === id);

  return(
    <div className='host'>
      <p>{logement.host.name}</p>
      <img src={logement.host.picture} alt={logement.host.name} />
    </div>
  )
}

function Rate({ rating }) {
  // Génération des étoiles pleines et vides sur la base de 5 étoiles
  const totalStars = 5;
  const fullStars = Array.from({ length: rating }, (_, index) => (
    <FontAwesomeIcon key={`full-${index}`} icon={faStar} className='full-star' />
  ));
  const emptyStars = Array.from({ length: totalStars - rating }, (_, index) => (
    <FontAwesomeIcon key={`empty-${index}`} icon={faStar} className='empty-star' />
  ));

  return (
    <div className='rating'>
      <div className='fullStar'>
        {fullStars}
      </div>
      <div className='emptyStar'>
        {emptyStars}
      </div>
    </div>
  );
}

function Tags() {
  const { id } = useParams();
  const logement = logementData.find(l => l.id === id);

  return(
    <ul className='tags'>
      {logement.tags.map((tags, index) => (
        <li key={index}>{tags}</li>
      ))}
    </ul>
  )
}

function Description() {
  const { id } = useParams();
  const logement = logementData.find(l => l.id === id);

  const [collapse, setCollapse] = useState(false);

  const handleCollapse = () => {
      setCollapse(!collapse); 
  };

  return(
    <div className='categoriesBox'>
      <div className='categories'>
          <h4>Description</h4>
          <ChevronUp collapse={collapse} handleCollapse={handleCollapse} />
      </div>
      <div className={`collapseContent ${collapse ? 'slide' : ''}`}>
        <p>{logement.description}</p>
      </div>
    </div>
    
  )
}

function Equipements() {
  const { id } = useParams();
  const logement = logementData.find(l => l.id === id);

  const [collapse, setCollapse] = useState(false);

  const handleCollapse = () => {
      setCollapse(!collapse); 
  };

  return (
    <div className='categoriesBox'>
      <div className='categories'>
          <h4>Équipements</h4>
          <ChevronUp collapse={collapse} handleCollapse={handleCollapse} />
      </div>
      <div className={`collapseContent ${collapse ? 'slide' : ''}`}>
        <ul>
          {logement.equipments.map((equipement, index) => (
            <li key={index}>{equipement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Logement;
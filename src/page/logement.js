import { Header, Footer } from './home';
import { useParams } from 'react-router-dom';
import './assets/style/index.scss';
import Chevrongauche from './assets/images/ChevronGauche.svg';
import Chevronright from './assets/images/ChevronDroite.svg';
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
      <Title />
      <p>{logement.description}</p>
      <ul>
        {logement.equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
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

  if (!pictures || pictures.length === 0) {
    return <p>Aucune image disponible</p>;
  }

  return (
    <div>
      <div className="carrousel">
        <div className="faLeft" onClick={prevSlide}>
          <img src={Chevrongauche} alt='chevron gauche' />
        </div>
        <img src={pictures[currentIndex]} alt={`Image du logement ${currentIndex + 1}`} />
        <p>{currentIndex + 1} / {pictures.length}</p>
        <div className="faRight" onClick={nextSlide}>
          <img src={Chevronright} alt='chevron droit' />
        </div>
      </div>
    </div>
  );
}

function Title() {
  const { id } = useParams();
  const logement = logementData.find(l => l.id === id);

  return (
  <h1>{logement.title}</h1>
  )
}

export default Logement;
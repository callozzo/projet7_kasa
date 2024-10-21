import '../style/index.scss';
import { Link } from 'react-router-dom';
import logement from '../logement.json';

// Fonciton pour l'affichage des card 
function Gallery() {
    return (
      <div className='body'>
        {logement.map((logement, index) => (
          <Card key={index} logement={logement} />
        ))}
      </div>
    );
  }
 
// Fonction pour l'affichage des image de cover et des noms d'appartements pour chaque logement  
function Card({ logement }) {
  return (
    <Link to={`/Logement/${logement.id}`}>
      <div className='card'>
        <img src={logement.cover} alt={logement.title} />
        <p>{logement.title}</p>
      </div>
    </Link>
  );
}

export default Gallery;
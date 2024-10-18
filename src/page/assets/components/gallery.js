import '../style/index.scss';
import { Link } from 'react-router-dom';
import logement from '../logement.json';

function Gallery() {
    return (
      <div className='body'>
        {logement.map((logement, index) => (
          <Card key={index} logement={logement} />
        ))}
      </div>
    );
  }
  
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
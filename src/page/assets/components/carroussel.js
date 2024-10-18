import '../style/index.scss';
import { useState } from 'react';
import Chevrongauche from '../images/ChevronGauche.svg';
import Chevrondroite from '../images/ChevronDroite.svg';

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

export default Carrousel;
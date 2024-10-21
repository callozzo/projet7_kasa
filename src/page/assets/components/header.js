import logoRouge from '../images/.LOGO.svg';
import logoRougeMobile from '../images/.LOGOMobile.svg';
import '../style/index.scss';
import { NavLink } from 'react-router-dom';

// Fonction pour le header avec un logo pour le format 1440px et pour le 768px pour toutes les pages
function Header() {
    return (
      <div className='header'>
        <div>
          <img className='logoRouge' src={logoRouge} alt='logo kasa' />
          <img className='logoRougeMobile' src={logoRougeMobile} alt='logo kasa pour mobile' />
        </div>
        <div className='link'>
          <NavLink className='espacement' to="/" end>Accueil</NavLink>
          <NavLink to="/Apropos">A Propos</NavLink>
        </div>
      </div>
    );
}

export default Header;
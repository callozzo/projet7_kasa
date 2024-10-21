import logoBlanc from '../images/.LOGOBlanc.svg';
import '../style/index.scss';

// Fonction pour le footer de toutes les pages 
function Footer() {
    return (
      <div className='footer'>
        <img className='logoBlanc' src={logoBlanc} alt='logo kasa blanc'/>
        <h4>© 2020 Kasa. All rights reserved</h4>
      </div>
    )
}

export default Footer;
import logoRouge from './assets/images/.LOGO.svg';
import logoBlanc from './assets/images/.LOGOBlanc.svg';
import logoRougeMobile from './assets/images/.LOGOMobile.svg';
import './assets/style/index.scss';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logement from './assets/logement.json';

function Home() {
  return(
    <div>
      <Header />
      <Banner />
      <Body />
      <Footer />
    </div>
  )
}

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



function Banner() {
  return (
    <div className='banner'>
      <h2>Chez vous, partout et ailleurs</h2>
    </div>
  )
}



function Body() {
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



function Footer() {
  return (
    <div className='footer'>
      <img className='logoBlanc' src={logoBlanc} alt='logo kasa blanc'/>
      <h4>© 2020 Kasa. All rights reserved</h4>
    </div>
  )
}

export { Header, Footer };
export default Home;
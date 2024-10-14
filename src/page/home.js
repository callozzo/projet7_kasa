import logoRouge from './assets/images/.LOGO.svg';
import logoBlanc from './assets/images/.LOGOBlanc.svg';
import './assets/style/index.scss';
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
        <img src={logoRouge} alt='logo kasa' />
      </div>
      <div className='link'>
        <Link className='espacement' to="/">Accueil</Link>
        <Link to="/Apropos">A Propos</Link>
      </div>
    </div>
  );
}



function Banner() {
  return (
    <div className='banner'>
      <h1>Chez vous, partout et ailleurs</h1>
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
      <img src={logoBlanc} alt='logo kasa noir'/>
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export { Header, Footer };
export default Home;
import logoRouge from './assets/.LOGO.svg';
import logoBlanc from './assets/.LOGOBlanc.svg';
import './assets/index.scss';
import { Link } from 'react-router-dom';

function Home() {
  return(
    <div>
      <Header />
      <Nav />
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



function Nav() {
  return (
    <div className='nav'>
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  )
}

function Body() {
  return(
    <div className='body'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

function Card() {
  return (
    <div>
      <Link to="/Logement" />
      <div className='card'>
        <p>Titre de la location</p>
      </div>
    </div>
  )
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
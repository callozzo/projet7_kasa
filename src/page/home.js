import './assets/style/index.scss';
import Header from './assets/components/header';
import Footer from './assets/components/footer';
import Gallery from './assets/components/gallery';

function Home() {
  return(
    <div>
      <Header />
      <Banner />
      <Gallery />
      <Footer />
    </div>
  )
}

function Banner() {
  return (
    <div className='banner'>
      <h2>Chez vous, partout et ailleurs</h2>
    </div>
  )
}

export default Home;
import Header from './assets/components/header';
import Footer from './assets/components/footer';
import { useParams } from 'react-router-dom';
import './assets/style/index.scss';
import logementData from './assets/logement.json';
import Erreur from './erreur404'
import Carrousel from './assets/components/carroussel';
import InfosLogements from './assets/components/infosLogement';

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
      <InfosLogements rating={logement.rating} />
      <Footer />
    </div>
  );
}

export default Logement;
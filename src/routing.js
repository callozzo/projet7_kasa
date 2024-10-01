import Home from './page/home';
import Apropos from './page/apropos'
import Erreur from './page/erreur404'
import Logement from './page/logement'
import { createBrowserRouter } from "react-router-dom";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/apropos",
      element: <Apropos />
    },
    {
      path: "/404",
      element: <Erreur />
    },
    {
      path: "/logement",
      element: <Logement />
    }
  ]);

export default router
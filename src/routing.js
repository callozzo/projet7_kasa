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
      path: "*",
      element: <Erreur />
    },
    {
      path: "/logement/:id",
      element: <Logement />
    }
  ]);

export default router
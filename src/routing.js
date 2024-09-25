import Home from './page/home';
import Apropos from './page/apropos'
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
      path: "/logement",
      element: <Logement />
    }
  ]);

export default router
import Home from './page/home';
import Apropos from './page/apropos'
import { createBrowserRouter } from "react-router-dom";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/apropos",
      element: <Apropos />
    }
  ]);

export default router
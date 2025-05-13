import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Item from "../pages/Item";
import Category from "../pages/Category";
import NotFound from "../pages/NotFound";

// URL Params: son parametros de URL, es decir informacion adicional que viaja en la URL que podemos utilizar
// Cuando especificamos una ruta de la siguiente forma: /item/:id --> todo lo que esta luego del ':' le dice al router que es un parametro dinamico

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        //path --> camino / la ruta
        //elemento --> el componete que se rederiza
        path: "/",
        element: <Home />, //JSX.Element / React.ReactNode
      },
      {
        path: "/item/:id",
        element: <Item />,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

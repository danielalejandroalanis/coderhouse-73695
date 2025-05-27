import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Item from "../pages/Item";
import Category from "../pages/Category";
import NotFound from "../pages/NotFound";
import Memo from "../pages/Memo";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
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
      {
        path: '/memo',
        element: <Memo />
      }
    ],
  },
];

export const router = createBrowserRouter(routes);

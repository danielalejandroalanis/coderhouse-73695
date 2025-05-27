import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import MainLayout from "./layouts/MainLayout";
import ItemListContainer from "./components/ItemListContainer";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <ChakraProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ChakraProvider>
  );
};

export default App;

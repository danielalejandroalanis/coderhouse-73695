import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import MainLayout from "./layouts/MainLayout";
import ItemListContainer from "./components/ItemListContainer";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

const App = () => {
  return (
    <ChakraProvider>
        {/* <ItemListContainer /> */}
        <RouterProvider router={router} />
    </ChakraProvider>
  );
};

export default App;

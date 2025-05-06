import React from "react";
import { ChakraProvider, Button } from "@chakra-ui/react";
import ItemListContainer from "./components/ItemListContainer";
import MainLayout from "./layouts/MainLayout";
import {
  createNewProduct,
  deleteProduct,
  updateProduct,
} from "./services/products.service";

const App = () => {
  // const addNewProduct = () => {
  //   const data = {
  //     title: "Producto Coderhouse",
  //     description: "Producto creado en clase",
  //     price: 100,
  //   };

  //   createNewProduct(data).then((res) => {
  //     console.log(res);
  //   });
  // };
  // const updateExistingProduct = () => {
  //      const data = {
  //     title: "Producto Coderhouse",
  //     description: "Producto creado en clase",
  //     price: 100,
  //   };
  //   updateProduct(2, data).then((res) => {
  //     console.log(res);
  //   });
  // };
  // const deleteExistingProduct = () => {
  //   deleteProduct(2).then((res) => {
  //     console.log(res);
  //   });
  // };
  return (
    <ChakraProvider>
      <MainLayout>
        {/* <Button onClick={addNewProduct}>Crear Producto</Button> */}
        {/* <Button onClick={updateExistingProduct}>Actualizar Producto</Button> */}
        {/* <Button onClick={deleteExistingProduct}>Eliminar Producto</Button> */}
        <ItemListContainer greeting={"Productos nuevos"} />
      </MainLayout>
    </ChakraProvider>
  );
};

export default App;

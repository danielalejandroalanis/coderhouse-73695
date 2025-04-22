import React, { useState } from "react";
import { Box, Button, ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  //El estado es un valor que tiene el componente en determinado momento y que puede mutar
  //Se define usando el hook (funcion de react) useState el cual desestructura dos valores, el primero el valor del estado y el segundo la funcion actualizadora de ese estado
  const [state, setState] = useState(0);

  const handleClick = () => {
    setState(state + 1);
  };

  console.log(state);

  return (
    <ChakraProvider>
      <Box height="100vh">
        <NavBar />
        {state}
        <Button onClick={handleClick}>+1</Button>
        <ItemListContainer greeting="Bienvenidos a mi Tienda!" />
      </Box>
    </ChakraProvider>
  );
};

export default App;

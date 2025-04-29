import React from "react";
import { Button, ChakraProvider, Text } from "@chakra-ui/react";
import ItemListContainer from "./components/ItemListContainer";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  //El estado es un valor que tiene el componente en determinado momento y que puede mutar
  //Se define usando el hook (funcion de react) useState el cual desestructura dos valores, el primero el valor del estado y el segundo la funcion actualizadora de ese estado
  // const [state, setState] = React.useState(100);
  // const [stateTwo, setStateTwo] = React.useState(0);

  // const handleClick = () => {
  //   setState(state + 1);
  // };

  // const handleClickTwo = () => {
  //   setStateTwo(stateTwo + 1);
  // };
  // const handleRemoveClick = () => {
  //   setState(state - 1);
  // };

  //useRef: crear una referencia en el DOM real | guardar valores y que estos no se vean afectados durante los re-renders
  // const divRef = useRef(null);

  // Primera forma: useEffect sin dependencias (useEffect sin control - forma *menos* recomendada)
  // React.useEffect(() => {
  //   console.log("useEffect sin dependencias");
  // });

  // Segunda forma: useEffect con lista de dependencias vacias
  // React.useEffect(() => {
  //   console.log("useEffect sin dependencias");
  //   //Si quiero traer informacion de una API, ejecuto mi funcion aqui
  // }, []);

  // Tercera forma: useEffect con lista de dependencias
  // React.useEffect(() => {
  //   console.log("useEffect con dependencias");
  //   //Si quiero traer informacion de una API, ejecuto mi funcion aqui
  // }, [state]);

  return (
    <ChakraProvider>
      <MainLayout>
        <ItemListContainer greeting="Bienvenidos a mi Tienda!" />
        {/* <Button onClick={handleClick}>Suma +1</Button>
        <Button onClick={handleRemoveClick}>Resta -1</Button>
        <Button onClick={handleClickTwo}>SumaDos +1</Button>
        <Text fontSize={40}>{state}</Text> */}
        {/* <div ref={divRef}>Mi div</div>
        <button
          onClick={() => {
            divRef.current.innerHTML = "Texto nuevo";
            divRef.current.className = "mi-clase";
          }}
        >
          click me
        </button> */}
      </MainLayout>
    </ChakraProvider>
  );
};

export default App;

import React from "react";
import "./App.css";

//Componentes basados en funciones

//Function tiene 'this'
// function MyButton() {
//   const suma = 2 + 2;
//   return <button>{suma}</button>;
// }

//Function no tiene 'this'
const MyButton = () => {
  return <button>Test</button>;
};

const App = () => {
  return <MyButton />;
};

export default App;

//Componentes basados en clases (busquen Error Boundary)
// class MyButton extends React.Component {}

import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/config/firebase";

const AddDoc = () => {
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    price: 0.0,
    discountPercentage: 0.0,
    thumbnail: "",
    category: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const productsCollection = collection(db, "products");
    addDoc(productsCollection, formState)
      .then(({ id }) => {
        console.log(id);
      })
      .catch((e) => console.error(e));
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Input
        type="text"
        placeholder="Titulo"
        onChange={(e) => {
          setFormState({
            ...formState,
            title: e.target.value,
          });
        }}
      />
      <Input
        type="text"
        placeholder="Descripcion"
        onChange={(e) => {
          setFormState({
            ...formState,
            description: e.target.value,
          });
        }}
      />
      <Input
        type="number"
        placeholder="Precio"
        onChange={(e) => {
          setFormState({
            ...formState,
            price: e.target.value,
          });
        }}
      />
      <Input
        type="number"
        placeholder="Porcentaje de Descuento"
        onChange={(e) => {
          setFormState({
            ...formState,
            discountPercentage: e.target.value,
          });
        }}
      />
      <Input
        type="text"
        placeholder="Thumbnail"
        onChange={(e) => {
          setFormState({
            ...formState,
            thumbnail: e.target.value,
          });
        }}
      />
      <Input
        type="text"
        placeholder="Categoria"
        onChange={(e) => {
          setFormState({
            ...formState,
            category: e.target.value,
          });
        }}
      />
      <Button type="submit">Crear</Button>
    </form>
  );
};
export default AddDoc;

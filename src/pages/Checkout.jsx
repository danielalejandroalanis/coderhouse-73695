import { Button, Container, Input, useToast } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../services/config/firebase";

const Checkout = () => {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const { cart, getTotalPrice } = useContext(CartContext);

  const toast = useToast();

  const handleSumbit = (e) => {
    e.preventDefault();

    const data = {
      buyer: formState,
      order: cart,
      total: getTotalPrice(),
    };
    const cartCollection = collection(db, "cart");
    addDoc(cartCollection, data)
      .then(({ id }) =>
        toast({
          title: "Compra finalizada",
          description: `Por cualquier reclamo indicar el numero de orden: ${id}`,
          status: "success",
          duration: 3000,
          isClosable: true,
        })
      )
      .catch((e) => console.error(e));
  };
  return (
    <Container>
      <form onSubmit={(e) => handleSumbit(e)}>
        <Input
          type="text"
          placeholder="Nombre completo"
          onChange={(e) =>
            setFormState({
              ...formState,
              fullName: e.target.value,
            })
          }
        />
        <Input
          type="text"
          placeholder="Correo electronico"
          onChange={(e) =>
            setFormState({
              ...formState,
              email: e.target.value,
            })
          }
        />
        <Input
          type="text"
          placeholder="Numero de contacto"
          onChange={(e) =>
            setFormState({
              ...formState,
              phoneNumber: e.target.value,
            })
          }
        />
        <Button type="submit">Comprar</Button>
      </form>
    </Container>
  );
};

export default Checkout;

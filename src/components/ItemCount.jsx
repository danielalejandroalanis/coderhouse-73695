import { Box, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ItemCount = ({ product }) => {
  const { addProductToCart, removeProductFromCart } = useContext(CartContext);

  return (
    <Box>
      <Button onClick={() => {removeProductFromCart(product)}}>Quitar Item</Button>
      <Button ml={3} onClick={() => addProductToCart(product)}>
        Agregar Item
      </Button>
    </Box>
  );
};

export default ItemCount;

import { Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { getTotalCount, cart } = useContext(CartContext);
  const totalCount = getTotalCount();

  console.log(cart)

  return (
    <Flex alignItems="center">
      <CiShoppingCart size={30} /> {totalCount}
    </Flex>
  );
};

export default CartWidget;

import {
  Flex,
  Text,
  MenuButton,
  Menu,
  MenuList,
  Button,
  MenuItem,
} from "@chakra-ui/react";
import CartWidget from "./CartWidget";
const NavBar = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      width="100vw"
      padding="0 20px"
      height="7vh"
      border="1px solid #2e2e2e"
    >
      <Text className="test">Coder's Store</Text>
      <Menu>
        <MenuButton as={Button}>Categorias</MenuButton>
        <MenuList>
          <MenuItem>Zapatillas</MenuItem>
          <MenuItem>Jordans</MenuItem>
        </MenuList>
      </Menu>
      <CartWidget />
    </Flex>
  );
};

export default NavBar;

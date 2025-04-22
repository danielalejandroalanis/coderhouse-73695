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

// JSX es una extension de Javascript que combina javascript + XML (basicamente es javascript + html)
//PascalCase ===> ItemListContainer / NavBar (ItemListContainer)
//Se utiliza para los estilos camelCase
// Clases de css se escriben no con el atributo class sino con className

//CSS-in-JS
// const myStyles = {
//   alignItems: "center",
//   backgroundColor: "red",
//   fontSize: "2rem",
//   color: "white",
// };

const NavBar = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      width="100vw"
      padding="0 20px"
      height='5%'
      border='1px solid #2e2e2e'
    >
      <Text className="test">Coder's Store</Text>
      {/* <div style={myStyles}>Hola</div> */}
      <Menu>
        <MenuButton as={Button}>Actions</MenuButton>
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

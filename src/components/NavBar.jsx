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
import { useNavigate } from "react-router";
import { useGetFirestoreDocs } from "../hooks/useGetFirestoreDocs";

const NavBar = () => {
  const { items: categories } = useGetFirestoreDocs("categories");
  const navigate = useNavigate();

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      width="100vw"
      padding="0 20px"
      height="7vh"
      border="1px solid #2e2e2e"
    >
      <Text className="test" onClick={() => navigate("/")} cursor={"pointer"}>
        Coder's Store
      </Text>
      <Menu height={"200px"}>
        <MenuButton as={Button}>Categorias</MenuButton>
        <MenuList>
          {categories.map((item) => {
            return (
              <MenuItem
                key={item.slug}
                onClick={() => navigate(`/category/${item.slug}`)}
              >
                {item.name}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
      <CartWidget />
    </Flex>
  );
};

export default NavBar;

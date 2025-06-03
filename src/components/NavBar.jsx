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
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/config/firebase";

const NavBar = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const categoriesCollection = collection(db, "categories");
    getDocs(categoriesCollection)
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCategories(data);
      })
      .catch(() => setError(true));
  }, []);

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

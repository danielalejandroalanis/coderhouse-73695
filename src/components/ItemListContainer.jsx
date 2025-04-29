import {
  Flex,
  Text,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const MOCK_DATA = [
  {
    id: 1,
    title: "Zapatillas Adidas",
    description: "Zapatillas Adidas 38 Mujer",
    price: 100,
    currency: "USD",
    stock: 10,
  },
  {
    id: 2,
    title: "Zapatillas Adidas",
    description: "Zapatillas Adidas 42 Hombre",
    price: 120,
    currency: "USD",
    stock: 10,
  },
  {
    id: 3,
    title: "Zapatillas Nike",
    description: "Zapatillas Nike 40 Hombre",
    price: 110,
    currency: "USD",
    stock: 10,
  },
];

const isTrue = false;

const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isTrue) {
      resolve(MOCK_DATA);
    } else {
      reject("Rechazado, no hay productos");
    }
  }, 2000);
});

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // respuesta de promesa puede ser negativa o positiva
  // Pending: cuando la promesa aun no se cumplio
  // Reject: cuando la promesa se cumplio negativamente
  // Fullfilled: cuando la proemsa se cumplio positivamente

  useEffect(() => {
    newPromise
      .then((res) => {
        console.log(res);
        setProducts(res);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return loading ? (
    <Spinner size={"xl"} color="red" thickness="4px"/>
  ) : (
    <Flex
      fontSize="2rem"
      height="95%"
      width="100vw"
      alignItems="center"
      justifyContent="center"
    >
      {/* {products.map((product) => (
      <Text> {product.title} </Text>
    ))} */}
      {products.length === 0 ? (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Your browser is outdated!</AlertTitle>
          <AlertDescription>
            Your Chakra experience may be degraded.
          </AlertDescription>
        </Alert>
      ) : (
        products.map((product, index) => {
          return (
            <Flex
              key={product.id}
              border={"1px solid grey"}
              margin={30}
              flexDirection={"column"}
            >
              <Text>Titulo: {product.title}</Text>
              <Text>Descripcion: {product.description}</Text>
              <Text>Precio: ${product.price}</Text>
            </Flex>
          );
        })
      )}
    </Flex>
  );
};

export default ItemListContainer;

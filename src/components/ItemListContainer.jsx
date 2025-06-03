import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router";

const ItemCard = ({ id, image, title, description, price, discount }) => {
  const priceAfterDiscount = (price - (price * discount) / 100).toFixed(2);
  const navigate = useNavigate();

  return (
    <Box
      width={"300px"}
      borderWidth={"1px"}
      borderRadius={"lg"}
      color={"white"}
      transition="transform 0.3s, box-shadow 0.3s"
      _hover={{ transform: "translateY(-5px)", boxShadow: "lg" }}
      onClick={() => navigate(`/item/${id}`)}
    >
      <Image alt={title} src={image} objectFit={"contain"} width={"100%"} />
      <Box padding={4}>
        <Heading size={"md"} marginBottom={2}>
          {title}
        </Heading>
        <Text noOfLines={2} mb={4} color="gray.400">
          {description}
        </Text>
        <Text fontSize={"18px"}>${price}</Text>
        <Text fontSize={"18px"}>${priceAfterDiscount}</Text>
      </Box>
    </Box>
  );
};

const ItemListContainer = ({ products }) => {
  return (
    <Box width={"100%"} overflowX={"hidden"} p={4}>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 6 }} spacing={4} width={"100%"}>
        {products.map((product) => {
          return (
            <ItemCard
              key={product.id}
              id={product.id}
              image={product.thumbnail}
              title={product.title}
              description={product.description}
              price={product.price}
              discount={product.discountPercentage}
            />
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default ItemListContainer;

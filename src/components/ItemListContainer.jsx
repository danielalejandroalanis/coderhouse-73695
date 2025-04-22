import { Flex } from "@chakra-ui/react";
// const ItemListContainer = (props) => {

//     console.log(props.greeting)

//   return <div>{props.greeting}</div>;
// };

// export default ItemListContainer;

// props es un objeto
const ItemListContainer = ({ greeting }) => {
  return (
    <Flex
      fontSize="2rem"
      height="95%"
      width="100vw"
      alignItems="center"
      justifyContent="center"
    >
      {greeting}
    </Flex>
  );
};

export default ItemListContainer;

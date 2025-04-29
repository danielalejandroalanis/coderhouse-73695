import { Box, Flex } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

const MainLayout = ({ children }) => {
  return (
    <Box height={"100vh"} width={"100vw"}>
      <NavBar />
      <Flex height={"90vh"}>{children}</Flex>
    </Box>
  );
};

export default MainLayout;

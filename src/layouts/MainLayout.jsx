import { Outlet } from "react-router";
import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

const MainLayout = () => {
  return (
    <Box height={"100vh"} width={"100vw"}>
      <NavBar />
      <Box width={"100vw"}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;

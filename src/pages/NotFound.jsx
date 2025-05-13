import { Box, Button, Container, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  
  return (
    <Container maxW="container.xl" h="100vh" centerContent>
      <VStack spacing={6} justify="center" h="full">
        <Heading
          fontSize={{ base: "6xl", md: "8xl" }}
          bgGradient="linear(to-r, blue.400, purple.500)"
          bgClip="text"
          fontWeight="extrabold"
        >
          404
        </Heading>
        <Heading size="xl">¡Ups! Página no encontrada</Heading>
        <Text fontSize="lg" color="gray.600" textAlign="center">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </Text>
        <Button
          colorScheme="blue"
          size="lg"
          onClick={() => navigate("/")}
          _hover={{ transform: "scale(1.05)" }}
          transition="all 0.2s"
        >
          Volver al inicio
        </Button>
      </VStack>
    </Container>
  );
};

export default NotFound;

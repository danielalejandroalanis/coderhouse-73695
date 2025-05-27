import { Box, Button, Input } from "@chakra-ui/react";
import { useState, memo } from "react";

const Contador = memo(({ value }) => {
  console.log("Contador se renderiza...");
  return <h1>{value}</h1>;
});

const Memo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  console.log("Memo se renderiza...");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Box>
      <Button onClick={() => setCount(count + 1)}>+1</Button>
      <Input
        value={text}
        onChange={handleChange}
        placeholder="Ingrese lo que sea..."
        type="text"
      />
      <Contador value={count} />
    </Box>
  );
};

export default Memo;

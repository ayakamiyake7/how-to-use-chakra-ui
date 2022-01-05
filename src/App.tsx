import React from "react";
import "./App.css";
import {
  Box,
  Button,
  ChakraProvider,
  HStack,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import Navigation from "./Navigation";

function App() {
  const sampleText = ["dog", "cat"];
  return (
    <ChakraProvider>
      <Navigation />
      <div className="App"></div>
      <Box p={8} mb={10} backgroundColor={"orange.100"}>
        Hello
      </Box>
      <Button
        colorScheme="red"
        _hover={{ backgroundColor: "red.800", fontSize: "lg" }}
      >
        button
      </Button>
      <Text>Hover me</Text>

      <Box _before={{ content: `"「"` }} _after={{ content: `"」"` }}>
        aaa~
      </Box>

      <Input
        placeholder="Enter the text"
        _placeholder={{ color: "purple.500" }}
      />

      <Box bg={{ base: "red.200", md: "green.200" }}>hello world!</Box>

      <Link href="https://google.com">
        <Button>Google</Button>
      </Link>
      <Button as="a" href="https://google.com">
        as=a button
      </Button>

      <Box sx={{ breakInside: "avoid" }}>xxx</Box>

      <Stack>
        {sampleText.map((item) => {
          <Box bg="red.50" p={2}>
            {item}
          </Box>;
        })}
      </Stack>

      <HStack>
        <Box>🐶</Box>
        <Box>Dog</Box>Dog
      </HStack>
    </ChakraProvider>
  );
}

export default App;

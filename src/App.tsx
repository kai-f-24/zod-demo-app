import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Form from "./form/form";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Form />
      </div>
    </ChakraProvider>
  );
}

export default App;

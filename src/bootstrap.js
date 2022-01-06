import reactDom from "react-dom";
import App from "./App";
import "./style.css";
import { ChakraProvider } from "@chakra-ui/react";

reactDom.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);

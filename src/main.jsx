import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import ViewCV from "../HomePage_Components/ViewCV.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
      {/* <ViewCV /> */}
    </ChakraProvider>
  </React.StrictMode>
);

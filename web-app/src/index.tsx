import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";

const colors = {
  brand: {
    100: "#E5F0F6",
    200: "#337299",
    500: "#254356",
  },
};

const theme = extendTheme({ colors });

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN!}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID!}
    redirectUri="http://localhost:3000/home"
  >
    <ChakraProvider theme={theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChakraProvider>
  </Auth0Provider>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./Assets/global.scss";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import client from "./ApolloClient";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);

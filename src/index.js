import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import "./styles/index.css";
import App from "./components/App";
import { BACKEND_URL } from "./constants";

const link = createHttpLink({
  uri: BACKEND_URL,
  headers: {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYyMzYwMzkyM30.iCUYK_zJwdQ6swHLjzjkvE91k6-9K_2JEiA1K65rKtU",
  },
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

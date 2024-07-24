// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import UnderConstruction from "../pages/UnderConstruction";
import JoinCoach from "../pages/JoinCoach";
import Success from "../pages/Success";
const httpLink = createHttpLink({ uri: "/graphql" });

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function AppRoutes() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route exact path="/contact-us" element={<Contact />} />
          <Route exact path="/about-us" element={<About />} />
          <Route
            exact
            path="/under-construction"
            element={<UnderConstruction />}
          />
          <Route exact path="/JoinCoach" element={<JoinCoach />} />
          <Route exact path="/Success" element={<Success />} />
          <Route exact path="/" element={<HomePage />} />
          <Route path="*" element={<UnderConstruction />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

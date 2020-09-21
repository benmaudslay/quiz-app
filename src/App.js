import React, { useState } from "react";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { ApolloProvider } from "react-apollo";

import Questions from "./components/questions";
import QuestionModal from "./components/question-modal";

import Add from "./assets/add.svg";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const token = process.env.REACT_APP_TOKEN;
console.log(token);
const httpLink = createHttpLink({
  uri: "https://api.8base.com/ckf57jmd9000208l10o1t0id7",
});

const authLink = setContext((_, { headers }) => {
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

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header>
          <div>GOT Quiz</div>
        </header>
        <Questions />
        <button className="add-question" onClick={(_) => setModalOpen(true)}>
          <img src={Add} alt="Click to create a new question" />
        </button>
        <QuestionModal isOpen={modalOpen} closeModal={closeModal} />
      </div>
    </ApolloProvider>
  );
};

export default App;

import React from 'react';

// import ApolloClient from 'apollo-boost';
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"
import { setContext } from '@apollo/client/link/context';

import { ApolloProvider } from 'react-apollo';

import Questions from "./components/questions"
import './App.css';

const token = "e0bc14c1-ca13-4efb-9f8c-5c90319a62ff"

const httpLink = createHttpLink({ uri: "https://api.8base.com/ckf57jmd9000208l10o1t0id7" })

const authLink = setContext((_, { headers }) => {

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})


const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Questions />
      </div>
    </ApolloProvider>
  )
}

export default App;

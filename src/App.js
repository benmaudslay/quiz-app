import ApolloClient from 'apollo-boost';
import React from 'react';
import { ApolloProvider } from 'react-apollo';

// import Questions from "./components/questions"
import './App.css';

const client = new ApolloClient({
  uri: "https://api.8base.com/ckf57jmd9000208l10o1t0id7"
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        {/* <Questions /> */}
      </div>
    </ApolloProvider>
  )
}

export default App;

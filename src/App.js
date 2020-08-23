import React from 'react';
import BookList from './component/BookList'; //import component
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

//create apollo client

const client = new ApolloClient({
  uri: "http://localhost:3003/graphql"

})



function App() {
  return (
    <ApolloProvider client={client} >
      <div id="main">
        <h1>Parth Website</h1>
        <BookList />

      </div>
    </ApolloProvider>

  );
}

export default App;

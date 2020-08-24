import React from 'react';
import BookList from './component/BookList'; //import component of BookList
import AddBook from './component/AddBook'; //import component of AddBook
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


//create apollo client and its setup

const client = new ApolloClient({
  uri: "http://localhost:3003/graphql",
  cache : new InMemoryCache()

})

function App() {
  return (
    <ApolloProvider client={client} >
      <div id="main">
        <h1>Parth Website</h1>
        <BookList />
        <AddBook />

      </div>
    </ApolloProvider>

  );
}

export default App;

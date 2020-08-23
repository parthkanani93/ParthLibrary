import React from 'react';
import { gql, useQuery } from '@apollo/client';


//create a query to featch data that query featch books query

const bookquery = gql`
{
  books{
    name
    id
  }
}

`;


function BookList() {
  const { loading, data } = useQuery(bookquery); //using usequryhooks we get loading and data from bookquery
  if (loading) return <h2>Loading.....</h2>

  return (
    <div id="main">
      <ul id="book-list" >
        {data.books.map((book) =>

          <li key={book.id}>{book.name}</li>
        )}


      </ul>

    </div>
  );
}

export default BookList;

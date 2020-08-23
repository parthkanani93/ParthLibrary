import React from 'react';
import { gql, useQuery } from '@apollo/client';
import {getbookquery} from '../queries/query';



function BookList() {
  const { loading, data } = useQuery(getbookquery); //using usequryhooks we get loading and data from bookquery
  if (loading) return <h2>Loading.....</h2>

  return (
    <div>
      <ul id="book-list" >
        {/* render books data in this ul list using map */}
        {data.books.map((book) =>

          <li key={book.id}>
            {
              book.name
            }
          </li>
        )}


      </ul>

    </div>
  );
}

export default BookList;

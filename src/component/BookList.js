import React , {useState} from 'react';
import { useQuery } from '@apollo/client';
import {getbookquery} from '../queries/query';
import BookDetail from './BookDetail';



function BookList() {
  const { loading, data } = useQuery(getbookquery); //using usequryhooks we get loading and data from bookquery
  const [selected , setselected] = useState("5f40eeacc58f2322b84a8d28");
  if (loading) return <h2>Loading.....</h2>

  return (
    <div>
      <ul id="book-list" >
      
        {data.books.map((book) =>

          <li key={book.id} onClick={(e)=> setselected(book.id)}>
            {
              book.name
            }
          </li>
        )}


      </ul>
      <BookDetail bookid={selected} />

    </div>
  );
}

export default BookList;

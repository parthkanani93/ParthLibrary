import React from 'react';
import { useQuery } from '@apollo/client';
import { getbookdetails } from '../queries/query';


function BookDetail({ bookid }) {

  const { data, loading } = useQuery(getbookdetails, { variables: { id: bookid } });
  if (loading) return <h2>Loading.....</h2>
  return (
    <div id="book-details">
      <h2>Output Book Details here</h2>
  
        {
         data && <p>Book Name :- {data.book.name}</p>
        }
         {
         data && <p>Book Genre :- {data.book.genre}</p>
        }
         {
         data && <p>Book Author :- {data.book.author.name}</p>
        }
         <h3>All Book By This Author</h3>
         {
           data && <ul>{data.book.author.book.map((e)=><li key={e.id}>{e.name}</li>)}</ul>
           
         }

    </div>
  );
}

export default BookDetail;
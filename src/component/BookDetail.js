import React from 'react';
import { useQuery } from '@apollo/client';
import { getbookdetails } from '../queries/query';


function BookDetail({ bookid }) {
  // const { loading, data } = useQuery(getbookdeatils); //using usequryhooks we get loading and data from bookquery

  const { data, loading } = useQuery(getbookdetails, { variables: { id: bookid } });
  if (loading) return <h2>Loading.....</h2>
  console.log(data);
  return (
    <div id="book-details">
      <h2>Output Book Details here</h2>
      <ul>

      </ul>
    </div>
  );
}

export default BookDetail;
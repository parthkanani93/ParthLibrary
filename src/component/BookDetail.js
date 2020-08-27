import React, { useEffect, useRef } from "react";
import { useQuery } from "@apollo/client";
import { getbookdetails } from "../queries/query";
import lottie from "lottie-web";

function BookDetail({ bookid }) {
  const { data, loading } = useQuery(getbookdetails, {
    variables: { id: bookid },
  });
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../book.json"),
    });
  }, [data]);
  if (loading) return <h2>Loading.....</h2>;
  return (
    <div id="book-details">
      <h2 style={{textAlign : "center"}} >Book Details</h2>
      <div id="book-section">
        <div id="book-info">
          {data && <p>Book Name :- {data.book.name}</p>}

          {data && <p>Book Genre :- {data.book.genre}</p>}
          {data && <p>Book Author :- {data.book.author.name}</p>}

          <h3>All Book By This Author</h3>
          {data && (
            <ul>
              {data.book.author.book.map((e) => (
                <li key={e.id}>{e.name}</li>
              ))}
            </ul>
          )}
        </div>
      <div className="container" ref={container}></div>
      </div>
    </div>
  );
}

export default BookDetail;

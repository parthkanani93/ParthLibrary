import React from 'react';
import { gql, useQuery } from '@apollo/client';


//create a query to featch data that query featch books query

const getauthorquery = gql`
{
  authors{
    name
    id
  }
}

`;



function AddBook() {
    const { loading, data } = useQuery(getauthorquery); //using usequryhooks we get loading and data from bookquery
    if (loading) return <h2>Loading.....</h2>

    return (
        <form id="add-book">
            <div className="field">
                <label>Book name:</label>
                <input type="text" />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" />
            </div>
            <div className="field">
                <label>Author:</label>
                <select>
                    <option>Select author</option>
                    {/* add authors list in option from db */}
                    {data.authors.map((author) =>
                        <option key={author.id} value={author.id}>{author.name}</option>

                    )}
                </select>
            </div>
            <button>+</button>

        </form>
    );
}

export default AddBook;




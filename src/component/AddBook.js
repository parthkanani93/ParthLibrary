import React ,{useState} from 'react';
import { useQuery , useMutation } from '@apollo/client';
import {getauthorquery , addBookMutation, getbookquery } from '../queries/query';




function AddBook() {
    const { loading, data } = useQuery(getauthorquery); //using usequryhooks we get loading and data from bookquery
    const [name ,setname] =useState();
    const [authorname ,setauthorname] =useState(); 
    const [genre ,setgenre] =useState();

    const [addbook] = useMutation(addBookMutation); //using usemutation we can mutation at frontend side and update db
    


    if (loading) return <h2>Loading.....</h2>

    return (

        <form id="add-book" onSubmit={(e)=> {
            e.preventDefault();
            addbook({
                variables : {
                    name : name,
                    authorId : authorname,
                    genre : genre

                },
                refetchQueries : [
                    {
                        query : getbookquery
                    }
                ]  
            })

        }}>
            <div className="field">
                <label>Book name:</label>
                <input type="text" onChange={(e)=> setname(e.target.value)} />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" onChange={(e=>setgenre(e.target.value))} />
            </div>
            <div className="field">
                <label>Author:</label>
                <select onChange={(e)=>setauthorname(e.target.value)}>
                    <option>Select author</option>
                   
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




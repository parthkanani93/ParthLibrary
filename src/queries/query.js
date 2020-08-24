import {gql} from '@apollo/client';

//create a query to featch data that query featch books query

const getauthorquery = gql`
{
  authors{
    name
    id
  }
}

`;


//create a query to featch data that query featch books query

const getbookquery = gql`
{
  books{
    name
    id
  }
}

`;
//mutaion in db to add a book
const addBookMutation = gql`
mutation($name : String! , $genre : String! , $authorId : ID!){
  addBook( name : $name , genre : $genre ,authorId : $authorId ){
    name
    id

  }
}

`;

export  {getauthorquery ,getbookquery,addBookMutation};
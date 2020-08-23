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

export  {getauthorquery ,getbookquery};
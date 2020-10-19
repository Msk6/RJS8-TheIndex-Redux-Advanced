import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import BookTable from "./BookTable";
import Loading from "./Loading";

//Route
import { useParams } from "react-router-dom";

//redux 
import {connect} from "react-redux"

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

const AuthorDetail = props => {
  //const author = props.author
  const { authorID } = useParams();

  const author = props.authors.find(auth => auth.id === +authorID)
  const books = author.books.map(bookID => props.books.find(book => book.id === bookID))
  //const books = props.books.filter(book => author.books.includes(book.id))
  console.log(books)
  if (false) {
    return <Loading />;
  } else {
    const authorName = `${author.first_name} ${author.last_name}`;
    return (
      <div className="author">
        <div>
          <h3>{authorName}</h3>
          <img
            src={author.imageUrl}
            className="img-thumbnail img-fluid"
            alt={authorName}
          />
        </div>
        <BookTable books={books} />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return (
    {
      authors: state.authorsState.authors,
      books: state.booksState.books,
    }
  )
}

export default connect(mapStateToProps)(AuthorDetail);

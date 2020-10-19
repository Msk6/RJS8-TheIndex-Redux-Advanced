import React, { useState } from "react";

// Components
import SearchBar from "./SearchBar";
import BookTable from "./BookTable";

//redux
import {connect} from "react-redux"

// Route
import { useParams } from "react-router-dom";

const BookList = props => {
  const [query, setQuery] = useState("");

  const filterBooks = () => {
    return props.books.filter(book =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  const bookColor = useParams().bookColor;
  let books = filterBooks();

  if (bookColor) {
    books = books.filter(book => book.color === bookColor);
  }

  return (
    <div>
      <h3>Books</h3>
      <SearchBar onChange={setQuery} />
      <BookTable books={books} />
    </div>
  );
};

const mapStateToProps = state => {
  return (
    {
      books: state.booksState.books
    }
  )
}

export default connect(mapStateToProps)(BookList);

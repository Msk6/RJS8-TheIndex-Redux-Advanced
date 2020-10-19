import React, { useState } from "react";

// Components
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";

// redux
import {connect} from "react-redux"

const AuthorsList = (props) => {
  const [query, setQuery] = useState("");

  const filterAuthors = () => {
    return props.authors.filter(author => {
      return `${author.first_name} ${author.last_name}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
  };

  const authorCards = filterAuthors().map(author => (
    <AuthorCard key={author.first_name + author.last_name} author={author} />
  ));

  return (
    <div className="authors">
      <h3>Authors</h3>
      <SearchBar onChange={setQuery} />
      <div className="row">{authorCards}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return (
    {
      authors: state.authorsState.authors
    }
  )
}

export default connect(mapStateToProps)(AuthorsList);

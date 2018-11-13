import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBooks } from "../actions";

class LibraryList extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  renderBooks() {
    return Object.values(this.props.books).map(book => (
      <li key={book._id}>
        <Link to={`/books/${book._id}`}>
          <h2>{book.title}</h2>
        </Link>
        <p>Comments: {book.comments}</p>
      </li>
    ));
  }

  render() {
    return (
      <div>
        <h1>Library List</h1>
        <ul>{this.renderBooks()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

export default connect(
  mapStateToProps,
  { fetchBooks }
)(LibraryList);

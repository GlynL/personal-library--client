import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBooks, deleteAllBooks } from "../actions";
import "../styles/library-list.css";

class LibraryList extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  renderBooks() {
    return Object.values(this.props.books).map(book => (
      <li className="library-list__item" key={book._id}>
        <Link className="library-list__link" to={`/books/${book._id}`}>
          <h2>{book.title}</h2>
        </Link>
        <p>Comments: {book.comments}</p>
      </li>
    ));
  }

  render() {
    return (
      <section className="library-list">
        <h1 className="library-list__heading">Library List</h1>
        <ul className="library-list__list">{this.renderBooks()}</ul>
        <button className="btn btn--danger" onClick={this.props.deleteAllBooks}>
          Delete All Books
        </button>
      </section>
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
  { fetchBooks, deleteAllBooks }
)(LibraryList);

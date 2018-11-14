import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchBook, deleteBook, clearBook, addComment } from "../actions";

class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    this.props.fetchBook(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.clearBook(this.props.match.params.id);
  }

  renderComments() {
    const { comments } = this.props.book;
    return comments.map(comment => {
      return <li key={comment._id}>{comment.comment}</li>;
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { id } = this.props.match.params;
    this.props.addComment(id, this.state);
    this.setState({ comment: "" });
  }

  handleDelete() {
    const { id } = this.props.match.params;
    this.props.deleteBook(id, () => this.props.history.push("/"));
  }

  render() {
    const { book } = this.props;
    if (Object.keys(book).length === 0 && book.constructor === Object)
      return <div>Loading...</div>;
    return (
      <div>
        <h1>{book.title}</h1>
        <ul>{this.renderComments()}</ul>
        <form onSubmit={this.handleSubmit}>
          <input
            name="comment"
            value={this.state.comment}
            onChange={this.handleChange}
            type="text"
            placeholder="Add a Comment"
          />
        </form>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

function mapStateToProps({ singleBook }) {
  return {
    book: singleBook
  };
}

export default connect(
  mapStateToProps,
  { fetchBook, deleteBook, clearBook, addComment }
)(SingleBook);

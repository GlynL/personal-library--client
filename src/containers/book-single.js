import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchBook } from "../actions";

class SingleBook extends Component {
  componentDidMount() {
    fetchBook(this.props.match.params.id);
  }

  render() {
    const { book } = this.props;
    if (!book) return <div>Loading...</div>;
    return (
      <div>
        <h1>{book.title}</h1>
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
  { fetchBook }
)(SingleBook);

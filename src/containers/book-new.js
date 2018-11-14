import React, { Component } from "react";
import { connect } from "react-redux";
import { addBook } from "../actions";
import "../styles/book-new.css";

class NewBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  handleSubmit = async e => {
    e.preventDefault();
    await this.props.addBook(this.state);
    this.props.history.push("/");
  };

  render() {
    return (
      <section className="new-book">
        <h1 className="new-book__heading">Add a Book</h1>
        <form className="new-book__form" onSubmit={this.handleSubmit}>
          <input
            className="new-book__input"
            type="text"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
            placeholder="enter a title for book"
          />
        </form>
      </section>
    );
  }
}

export default connect(
  null,
  { addBook }
)(NewBook);

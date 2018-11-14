import React from "react";
import { Link } from "react-router-dom";

import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link className="nav__link" to="/">
        Home
      </Link>
      <Link className="nav__link" to="/books/new">
        Add Book
      </Link>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>The Header</h1>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
      <Link to="/detail/1">Detail</Link>
    </header>
  );
}

export default Header;

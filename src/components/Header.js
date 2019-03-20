import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => (
  <ul>
    <li>
      <Link to="/">Landing</Link>
    </li>

    <li>
      <Link to="/home">Home</Link>
    </li>

    <li />
    <Link to="/about">About</Link>
  </ul>
);

export default Header;

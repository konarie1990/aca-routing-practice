import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => (
  <ul className="ListStyle">
    <li>
      <Link to="/">Landing</Link>
    </li>
    <br />
    <li>
      <Link to="/home">Home</Link>
    </li>
    <br />
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/ComponentOne">ComponentOne</Link>
    </li>
    <li>
      <Link to="/ComponentTwo">ComponentTwo</Link>
    </li>
  </ul>
);

export default Header;

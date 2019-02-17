import React from "react";
import { Link } from "react-router-dom";

export const Header = () => (
  <div className="Header">
    <h1 className="title">Trapper-Keeper</h1>
    <Link to="/new-note">Add Note</Link>
  </div>
);

export default Header;

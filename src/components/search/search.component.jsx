import React from "react";
import './search.styles.css'

export const Search = ({ placeholder, onSearchChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={event => onSearchChange(event)}
  />
);

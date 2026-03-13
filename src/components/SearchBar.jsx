import React from "react";

export default function SearchBar() {
  return (
    <div className="search-bar">

      <input
        type="text"
        placeholder="Search for grocery, store, fruit etc..."
      />

      <select>
        <option>Popularity</option>
        <option>Price Low</option>
        <option>Price High</option>
      </select>

    </div>
  );
}
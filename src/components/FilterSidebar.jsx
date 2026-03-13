import React from "react";

export default function FilterSidebar() {
  return (
    <div className="sidebar">

      <h3>Filters</h3>

      <div className="filter-group">
        <p>Market</p>
        <label><input type="checkbox" /> All</label>
        <label><input type="checkbox" /> Vegetables</label>
        <label><input type="checkbox" /> Fruits</label>
      </div>

      <div className="filter-group">
        <p>Categories</p>
        <label><input type="checkbox" /> All Products</label>
        <label><input type="checkbox" /> Fresh Foods</label>
        <label><input type="checkbox" /> Dairy</label>
        <label><input type="checkbox" /> Bakery</label>
      </div>

    </div>
  );
}
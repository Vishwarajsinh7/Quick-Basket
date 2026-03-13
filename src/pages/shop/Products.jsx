import React from "react";
import FilterSidebar from "../../components/FilterSidebar";
import ProductCard from "../../components/ProductCard";
import SearchBar from "../../components/SearchBar";
import "./Products.css";

const products = [
  {
    id: 1,
    name: "Organic Only Corns",
    price: 50,
    tag: "NEW"
  },
  {
    id: 2,
    name: "Multigrain Bread",
    price: 55
  },
  {
    id: 3,
    name: "Extra Virgin Olive Oil",
    price: 125
  },
  {
    id: 4,
    name: "Kashmiri Apples",
    price: 60
  },
  {
    id: 5,
    name: "Brown Egg (12pc)",
    price: 110
  },
  {
    id: 6,
    name: "4 Farm Cheddar",
    price: 115
  }
];

export default function Products() {
  return (
    <div className="products-page">

      <FilterSidebar />

      <div className="products-content">

        <SearchBar />

        <div className="product-grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

      </div>

    </div>
  );
}
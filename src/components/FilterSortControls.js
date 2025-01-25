import React from "react";
import { FaFilter, FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";

function FilterSortControls({
  selectedCategory,
  onCategoryChange,
  sortOrder,
  onSortOrderChange,
}) {
  return (
    <div className="mb-4 p-4 border rounded shadow-sm">
      <h3 className="mb-3">
        <FaFilter className="me-2" />
        Filter and Sort
      </h3>
      <div className="mb-3">
        <label htmlFor="categoryFilter" className="form-label">
          Filter by Category:
        </label>
        <select
          id="categoryFilter"
          className="form-select"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
        </select>
      </div>
      <button
        className="btn btn-secondary"
        onClick={() => onSortOrderChange(sortOrder === "asc" ? "desc" : "asc")}
      >
        {sortOrder === "asc" ? (
          <FaSortAmountDown className="me-1" />
        ) : (
          <FaSortAmountUp className="me-1" />
        )}
        Sort by Quantity ({sortOrder === "asc" ? "Ascending" : "Descending"})
      </button>
    </div>
  );
}

export default FilterSortControls;
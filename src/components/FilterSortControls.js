import React from "react";

function FilterSortControls({
  selectedCategory,
  onCategoryChange,
  sortOrder,
  onSortOrderChange,
}) {
  return (
    <div className="mb-3">
      <label htmlFor="categoryFilter" className="form-label">
        Filter by Category:
      </label>
      <select
        id="categoryFilter"
        className="form-select mb-3"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Category A">Category A</option>
        <option value="Category B">Category B</option>
      </select>
      <button
        className="btn btn-secondary"
        onClick={() => onSortOrderChange(sortOrder === "asc" ? "desc" : "asc")}
      >
        Sort by Quantity ({sortOrder === "asc" ? "Ascending" : "Descending"})
      </button>
    </div>
  );
}

export default FilterSortControls;
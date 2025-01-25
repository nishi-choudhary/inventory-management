import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

function AddItemForm({ onAddItem }) {
  const [newItem, setNewItem] = useState({ name: "", category: "", quantity: 0 });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem.name && newItem.category && newItem.quantity >= 0) {
      onAddItem(newItem);
      setNewItem({ name: "", category: "", quantity: 0 });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded shadow-sm">
      <h2 className="mb-3">
        <FaPlus className="me-2" />
        Add New Item
      </h2>
      <div className="mb-3">
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={newItem.name}
          onChange={handleInputChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={newItem.category}
          onChange={handleInputChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={handleInputChange}
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Item
      </button>
    </form>
  );
}

export default AddItemForm;
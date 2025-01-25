import React, { useState } from "react";

function EditItemForm({ editingItem, onUpdateItem, onCancel }) {
  const [updatedItem, setUpdatedItem] = useState(editingItem);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedItem({ ...updatedItem, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateItem(updatedItem);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h2>Edit Item</h2>
      <div className="mb-3">
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={updatedItem.name}
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
          value={updatedItem.category}
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
          value={updatedItem.quantity}
          onChange={handleInputChange}
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-success me-2">
        Update
      </button>
      <button type="button" className="btn btn-secondary" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}

export default EditItemForm;
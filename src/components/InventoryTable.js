import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function InventoryTable({ inventory, onEditItem, onDeleteItem }) {
  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Item Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr
              key={item.id}
              className={item.quantity < 10 ? "table-danger" : ""}
            >
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.quantity}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => onEditItem(item)}
                >
                  <FaEdit />
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDeleteItem(item.id)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InventoryTable;
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon, FaFilter, FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";
import AddItemForm from "./components/AddItemForm";
import EditItemForm from "./components/EditItemForm";
import InventoryTable from "./components/InventoryTable";
import FilterSortControls from "./components/FilterSortControls";
import "./App.css";

function App() {
  const [inventory, setInventory] = useState([
    { id: 1, name: "Laptop", category: "Electronics", quantity: 15 },
    { id: 2, name: "Desk Chair", category: "Furniture", quantity: 5 },
    { id: 3, name: "Printer", category: "Electronics", quantity: 8 },
  ]);
  const [editingItem, setEditingItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleAddItem = (newItem) => {
    setInventory([...inventory, { ...newItem, id: inventory.length + 1 }]);
    toast.success("Item added successfully!");
  };

  const handleDeleteItem = (id) => {
    setInventory(inventory.filter((item) => item.id !== id));
    toast.error("Item deleted successfully!");
  };

  const handleUpdateItem = (updatedItem) => {
    setInventory(
      inventory.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      )
    );
    setEditingItem(null);
    toast.success("Item updated successfully!");
  };

  const filteredInventory =
    selectedCategory === "All"
      ? inventory
      : inventory.filter((item) => item.category === selectedCategory);

  const sortedInventory = [...filteredInventory].sort((a, b) =>
    sortOrder === "asc" ? a.quantity - b.quantity : b.quantity - a.quantity
  );

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="text-center mb-0">Inventory Management</h1>
          <button
            className="btn btn-outline-secondary"
            onClick={toggleDarkMode}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
        <AddItemForm onAddItem={handleAddItem} darkMode={darkMode} />
        {editingItem && (
          <EditItemForm
            editingItem={editingItem}
            onUpdateItem={handleUpdateItem}
            onCancel={() => setEditingItem(null)}
            darkMode={darkMode}
          />
        )}
        <FilterSortControls
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          sortOrder={sortOrder}
          onSortOrderChange={setSortOrder}
          darkMode={darkMode}
        />
        <InventoryTable
          inventory={sortedInventory}
          onEditItem={setEditingItem}
          onDeleteItem={handleDeleteItem}
          darkMode={darkMode}
        />
        <ToastContainer position="bottom-right" />
      </div>
    </div>
  );
}

export default App;
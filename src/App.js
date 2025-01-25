import React, { useState } from "react";
import AddItemForm from "./components/AddItemForm";
import EditItemForm from "./components/EditItemForm";
import InventoryTable from "./components/InventoryTable";
import FilterSortControls from "./components/FilterSortControls";

function App() {
  const [inventory, setInventory] = useState([
    { id: 1, name: "Laptop", category: "Electronics", quantity: 15 },
    { id: 2, name: "Desk Chair", category: "Furniture", quantity: 5 },
    { id: 3, name: "Printer", category: "Electronics", quantity: 8 },
  ]);
  const [editingItem, setEditingItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleAddItem = (newItem) => {
    setInventory([...inventory, { ...newItem, id: inventory.length + 1 }]);
  };

  const handleDeleteItem = (id) => {
    setInventory(inventory.filter((item) => item.id !== id));
  };

  const handleUpdateItem = (updatedItem) => {
    setInventory(
      inventory.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      )
    );
    setEditingItem(null);
  };

  const filteredInventory =
    selectedCategory === "All"
      ? inventory
      : inventory.filter((item) => item.category === selectedCategory);

  const sortedInventory = [...filteredInventory].sort((a, b) =>
    sortOrder === "asc" ? a.quantity - b.quantity : b.quantity - a.quantity
  );

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Inventory Management</h1>
      <AddItemForm onAddItem={handleAddItem} />
      {editingItem && (
        <EditItemForm
          editingItem={editingItem}
          onUpdateItem={handleUpdateItem}
          onCancel={() => setEditingItem(null)}
        />
      )}
      <FilterSortControls
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        sortOrder={sortOrder}
        onSortOrderChange={setSortOrder}
      />
      <InventoryTable
        inventory={sortedInventory}
        onEditItem={setEditingItem}
        onDeleteItem={handleDeleteItem}
      />
    </div>
  );
}

export default App;
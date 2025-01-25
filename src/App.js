import React, { useState } from "react";
import AddItemForm from "./components/AddItemForm";
import InventoryTable from "./components/InventoryTable";

function App() {
  const [inventory, setInventory] = useState([
    { id: 1, name: "Item 1", category: "Category A", quantity: 15 },
    { id: 2, name: "Item 2", category: "Category B", quantity: 5 },
  ]);

  const handleAddItem = (newItem) => {
    setInventory([...inventory, { ...newItem, id: inventory.length + 1 }]);
  };

  return (
    <div className="container mt-5">
      <h1>Inventory Management</h1>
      <AddItemForm onAddItem={handleAddItem} />
      <InventoryTable inventory={inventory} />
    </div>
  );
}

export default App;
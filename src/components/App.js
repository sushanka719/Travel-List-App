import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";


function App() {
  const [item, setItem] = useState([])

  function handleAddItems(item) {
    setItem((items) => [...items, item])
  }

  function handleDeleteItem(id) {
    setItem((items) => items.filter(item => item.id !== id))
  }

  function handleToggleItem(id) {
    setItem((items) => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item))
  }

  function handleClearItem() {
    const confirmed = window.confirm("Are you sure you want to delete all items?")
    if (confirmed) setItem([])
  }

  return (
    <div className="App">
      <Logo></Logo>
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={item}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        handleClearItem={handleClearItem}
      />
      <Stats item={item} />
    </div>
  );
}

export default App;



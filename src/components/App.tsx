import { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [darkModeOn, setDarkModeOn] = useState(false);
  const appClass = darkModeOn ? "App dark" : "App light";

  function handleDarkMode() {
    setDarkModeOn((darkModeOn) => !darkModeOn);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

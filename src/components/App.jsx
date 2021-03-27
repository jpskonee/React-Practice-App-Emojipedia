import React from "react";
import emojipedia from "../emojipedia";
import Items from "./Items";
import Header from "./Header";

function createItems(item) {
  return (
    <Items
      key={item.id}
      emoji={item.emoji}
      name={item.name}
      meaning={item.meaning}
      id={item.id}
    />
  );
}

function App() {
  return (
    <div>
      <Header />
      <dl className="dictionary">{emojipedia.map(createItems)}</dl>
    </div>
  );
}

export default App;

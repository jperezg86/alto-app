import React from "react";
import "./App.css";
import Button from "./components/atoms/button/Button";
import Menu from "./components/molecules/menu/Menu";

function App() {
  const items = ['Home', 'About', 'Blog', 'Contact']
  return (
    <div>
      <Menu items={items}></Menu>
      <Button
        className="rounded-md"
        onClick={(e) => {
          console.log(e);
        }}
        type={"primary"}
      >
        Click me!
      </Button>
      <h1 className="text-secondary">Hola</h1>
    </div>
  );
}

export default App;

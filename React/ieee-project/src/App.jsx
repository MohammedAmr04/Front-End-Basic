import { useState } from "react";
import "./App.css";
import Button from "./Button";

function App() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <button onClick={() => setOpen(!open)}>open</button>
      {open && <Button />}
    </>
  );
}

export default App;

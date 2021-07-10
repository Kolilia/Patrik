import React, { useState } from "react";
import "./css/global.css";
import GenerateForms from "./GenerateForms";
import ListForms from "./ListForms";

function App() {
  const [allForms, setAllForms] = useState([]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <GenerateForms setAllForms={setAllForms} />

      <div style={{ width: 30 }} />

      <ListForms allForms={allForms} />
    </div>
  );
}

export default App;

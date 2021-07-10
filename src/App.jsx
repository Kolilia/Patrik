import React, { useState } from "react";
import "./css/global.css";
import GenerateForms from "./GenerateForms";
import ListForms from "./ListForms";
import ShowCurrentForm from "./ShowCurrentForm";

function App() {
  const [allForms, setAllForms] = useState([]);
  const [currentChooseItem, setCurrentChooseItem] = useState(null);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <GenerateForms
          setAllForms={setAllForms}
          setCurrentChooseItem={setCurrentChooseItem}
        />

        <div style={{ width: 400 }} />

        <ListForms
          allForms={allForms}
          setCurrentChooseItem={setCurrentChooseItem}
        />
      </div>

      <div style={{ height: 15 }} />

      <div style={{ display: "flex", justifyContent: "center" }}>
        {currentChooseItem && Object.keys(currentChooseItem).length > 0 && (
          <ShowCurrentForm
            currentChooseItem={currentChooseItem}
            setCurrentChooseItem={setCurrentChooseItem}
          />
        )}
      </div>
    </div>
  );
}

export default App;

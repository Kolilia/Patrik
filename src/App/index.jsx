import React, { useState } from "react";
import GenerateForms from "./components/GenerateForms";
import ListForms from "./components/ListForms";
import styles from "./index.module.css";

function App() {
  const [allForms, setAllForms] = useState([]);

  return (
    <div className={styles.root}>
      <div style={{ display: "flex" }}>
        <GenerateForms setAllForms={setAllForms} />

        <div style={{ width: 400 }} />

        <ListForms allForms={allForms} />
      </div>
    </div>
  );
}

export default App;

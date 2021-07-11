import React, { useState } from "react";
import GenerateForms from "./GenerateForms";
import styles from "./index.module.css";
import ListForms from "./ListForms";

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

import React from "react";
import styles from "./css/listForms.module.css";

const ListForms = ({ allForms, setCurrentChooseItem }) => {
  const mapForms = allForms.map((form, index) => {
    return (
      <div className={styles.containerForm} key={index}>
        <h4 className={styles.header}>{form?.title}</h4>

        <div style={{ height: 10 }} />

        <div className={styles.actionForm}>
          <button onClick={() => setCurrentChooseItem(form)}>Show</button>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.header}>
        <b>All created forms</b>
      </h2>

      {mapForms}
    </div>
  );
};

export default ListForms;

import React from "react";
import styles from "./index.module.css";
import ShowCurrentForm from "./ShowCurrentForm";

const ListForms = ({ allForms }) => {
  const mapForms = allForms.map((form, index) => {
    return (
      <div className={styles.containerForm} key={index}>
        <ShowCurrentForm currentForm={form} />

        <div style={{ height: 10 }} />

        <hr />

        <div style={{ height: 10 }} />
      </div>
    );
  });

  return (
    <div className={styles.root}>
      <h3 className={styles.header}>All created forms</h3>

      {mapForms}
    </div>
  );
};

export default ListForms;

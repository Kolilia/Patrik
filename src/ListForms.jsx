import React from "react";

const ListForms = ({ allForms, setCurrentChooseItem }) => {
  const mapForms = allForms.map((form, index) => {
    return (
      <div
        style={{
          width: "100%",
          borderBottom: "1px solid black",
          padding: 5,
        }}
        key={index}
      >
        <h4 style={{ margin: 0 }}>{form?.title}</h4>

        <div style={{ height: 10 }} />

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button onClick={() => setCurrentChooseItem(form)}>Show</button>
        </div>
      </div>
    );
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        flexDirection: "column",
      }}
    >
      <h2 style={{ margin: 0 }}>
        <b>All created forms</b>
      </h2>

      {mapForms}
    </div>
  );
};

export default ListForms;

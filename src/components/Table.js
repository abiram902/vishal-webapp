import React, { useState } from "react";
import "./Entry.css";

function Table({ lr, handleBlur, deleteEntry }) {
  const [edit, setEdit] = useState({
    status: false,
    colId: "",
    id: "",
  });
  const [entry, setEntry] = useState("");
  const coloumns = lr[0] && Object.keys(lr[0]);

  function handleEdit(e, colId, id) {
    e.preventDefault();
    const obj = lr.find((obj) => obj.uuid === id);
    const column = coloumns[colId];
    setEntry(obj[column]);
    setEdit({ status: true, colId, id });
  }

  function reset(e) {
    e.preventDefault();
    setEdit({ status: !edit.status, rowId: "", colId: "" });
    setEntry("");
  }

  return (
    <table id="itemTable">
      <thead>
        <tr>
          {lr[0] &&
            coloumns.map((heading) =>
              heading == "uuid" ? console.log(heading) : <th>{heading}</th>
            )}
          <th></th>
        </tr>
      </thead>
      <tbody>
        {lr
          .slice()
          .reverse()
          .slice(0, 21)
          .map((row, i) => (
            <tr>
              {coloumns.map((column, j) =>
                column == "uuid" ? (
                  console.log(column)
                ) : (
                  <td>
                    {edit.status &&
                    edit.colId === j &&
                    edit.id === row["uuid"] ? (
                      <input
                        onBlur={(e) => {
                          handleBlur(row["uuid"], column, entry, e);
                          reset(e);
                        }}
                        type="text"
                        onChange={(e) => setEntry(e.target.value.toUpperCase())}
                        value={entry}
                        autoFocus
                      />
                    ) : (
                      <p
                        onClick={(e) => handleEdit(e, j, row["uuid"])}
                        onBlur={reset}
                      >
                        {row[column]}
                      </p>
                    )}
                  </td>
                )
              )}
              <button onClick={(e) => deleteEntry(e, row["uuid"])}>❌ </button>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;

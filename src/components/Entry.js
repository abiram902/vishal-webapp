import React, { useEffect, useState } from "react";
import "./Entry.css";
import uuid from "uuid/dist/v1";
import { database } from "../firebase";
import Table from "./Table";

function Entry() {
  const [lr, setLr] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [lrdate, setLrdate] = useState("");
  const [lrno, setLrno] = useState("");
  const [material, setMaterial] = useState("");
  const [quantity, setQuantity] = useState("");
  const [invoiceNumber, setInvoiveNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [truckNo, setTruckNo] = useState("");
  const [acList, setAcList] = useState([]);
  const [sync, setSync] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [qu, setQu] = useState("");

  useEffect(() => {
    console.log("in useeffect");
    let ref = database.ref("/lrs");
    ref.on("value", (snapshot) => setLr([...snapshot.val()]));
    console.log(lr);
  }, []);

  // upload data to database
  const handleDb = (list) => {
    console.log(`in handleDb ${list}`);
    database.ref("/lrs").set(list);
    database.ref("/acList").set(acList);
  };
  // adding entries to local and remote data store
  const handleSubmit = (e) => {
    e.preventDefault();
    if (quantity == "" || material == "") {
      alert("please fill all the fields");
    } else {
      const list = [
        ...lr,
        {
          lrno,
          lrdate,
          truckNo,
          invoiceNumber,
          invoiceDate,
          from,
          to,
          material,
          quantity,
          uuid: uuid(),
        },
      ];
      setLr(list);
      setMaterial("");
      setQuantity("");
      handleDb(list);
    }
  };
  // auto complete list for input fields
  const handelAcList = (e) => {
    const val = e.target.value.toUpperCase();
    if (acList.includes(val) || val == "" || val == " ") {
      console.log(val);
    } else {
      setAcList([...acList, val]);
    }
  };
  // search function
  function search(rows) {
    const columns = rows[0] && Object.keys(rows[0]);

    return rows.length
      ? rows.filter((row) =>
          columns.some(
            (column) =>
              row[column]
                .toString()
                .toUpperCase()
                .indexOf(qu.toString().toUpperCase()) > -1
          )
        )
      : rows;
  }
  // editing from table
  function handleBlur(uuid, column, val, e) {
    e.preventDefault();
    const itemIndex = lr.findIndex((i) => i.uuid === uuid);

    const eList = [...lr];
    eList[itemIndex] = { ...eList[itemIndex], [column]: val };
    setLr(eList);
  }
  //delete entry
  function deleteEntry(e, uid) {
    const eList = lr.filter((itrm) => itrm["uuid"] != uid);
    setLr(eList);
    handleDb([...lr]);
  }
  //show all the entries function
  function showAllentries() {
    setShowAll(!showAll);
  }

  return (
    <div className="entry__container">
      <h1>entry page</h1>
      <form className="entry__form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="lrno">LR Number</label>
          <input
            type="text"
            onChange={(e) => setLrno(e.target.value)}
            name="lrno"
            value={lrno}
            required
          />
          <label htmlFor="lrdate"> LR Date</label>
          <input
            type="date"
            onChange={(e) => setLrdate(e.target.value)}
            name="lrdate"
            value={lrdate}
            required
          />
          <label htmlFor="truckNo">Truck Number</label>
          <input
            type="text"
            onChange={(e) => setTruckNo(e.target.value.toUpperCase())}
            name="truckNo"
            value={truckNo}
            required
          />
          <label for="invoiceNumber">Invoice Number</label>
          <input
            type="text"
            onChange={(e) => setInvoiveNumber(e.target.value.toUpperCase())}
            name="invoiceNumber"
            value={invoiceNumber}
            required
          />
        </div>
        <div>
          <label htmlFor="invoiceDate">Invoice Date</label>
          <input
            type="date"
            onChange={(e) => setInvoiceDate(e.target.value)}
            name="invoiceDate"
            value={invoiceDate}
            required
          />
          <label htmlFor="from">From </label>
          <input
            type="text"
            onChange={(e) => setFrom(e.target.value.toUpperCase())}
            name="from"
            value={from}
            list="acList"
            onBlur={handelAcList}
          />
          <label htmlFor="to">To</label>
          <input
            type="text"
            onChange={(e) => setTo(e.target.value.toUpperCase())}
            name="to"
            value={to}
            list="acList"
            onBlur={handelAcList}
          />
          <label htmlFor="material">Material </label>
          <input
            type="text"
            onChange={(e) => setMaterial(e.target.value.toUpperCase())}
            name="material"
            value={material}
            list="acList"
            onBlur={handelAcList}
            autoFocus
          />
          <datalist id="acList">
            {acList.map((i) => (
              <option>{i}</option>
            ))}
          </datalist>
          <label htmlFor="quantity">Quantity</label>
          <input
            type="text"
            onChange={(e) => setQuantity(e.target.value)}
            name="quantity"
            value={quantity}
            required
          />
          <input type="submit" />
        </div>
      </form>

      <button onClick={handleDb}>Upload to database</button>
      <input
        type="text"
        value={qu}
        onChange={(e) => setQu(e.target.value)}
        placeholder="search"
      />

      <Table
        lr={search(lr)}
        handleBlur={handleBlur}
        deleteEntry={deleteEntry}
        showAll={showAll}
      />
      <button className="show__all" onClick={showAllentries}>
        {showAll ? "show less" : "show all"}
      </button>
    </div>
  );
}

export default Entry;

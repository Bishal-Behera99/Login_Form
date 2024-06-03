import React, { useState } from "react";

function Mylogins() {
  const [text, settext] = useState("");

  const [lastname, setlastname] = useState("");

  const [fulltext, setfulltext] = useState("");

  const [fullLname, setfullLname] = useState("");
  function handlechange(e) {
    const fname = e.target.value;
    settext(e.target.value);
  }

  function handlechange2(e) {
    const lname = e.target.value;
    setlastname(e.target.value);
  }
  function handlesubmit(e) {
    e.preventDefault();
    setfulltext(text);
    setfullLname(lastname);
  }
  return (
    <div
      style={{
        // border: "2px solid red",
        width: "50vw",
        textAlign: "center",
        height: "auto",
        color: "white",
        fontWeight: "bold",
      }}
    >
      <h1>
        Hello {fulltext} {fullLname}
      </h1>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // width: "40%",
          gap: "10px",

          textAlign: "center",
        }}
        onSubmit={handlesubmit}
      >
        <input
          type="text"
          autoComplete="off"
          name="text"
          onChange={handlechange}
          value={text}
        />

        <input
          type="text"
          autoComplete="off"
          name="lastname"
          onChange={handlechange2}
          value={lastname}
        />
        <button
          style={{
            cursor: "pointer",
            padding: "10px 12px",
            border: "none",
            outline: "none",
          }}
          type="submit"
        >
          Submit Me ✌
        </button>
      </form>
    </div>
  );
}

export default Mylogins;

import React, { useState } from "react";

function Clock3() {
  const date = new Date();
  console.log(date);

  const time = date.toLocaleTimeString();

  console.log(time);

  const [times, setnewtime] = useState(time);

  function newtime() {
    const time = new Date().toLocaleTimeString();

    setnewtime(time);
  }

  setInterval(newtime, 1000);

  return (
    <div
      style={{
        fontSize: "50px",
        fontWeight: "bold",
        background: "green",
      }}
    >
      {times}
    </div>
  );
}

export default Clock3;

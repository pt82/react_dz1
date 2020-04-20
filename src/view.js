import React from "react";

function View(props) {
  return (
    <div >
      <div >{props.title}</div>
      <div >{props.data}</div>
      <div >{props.desc}</div> <br></br>
    </div>
  );
}

export default View;
import React from "react";

function Detail(props) {
  console.log(props);
  return (
    <>
      <h1>The Detail Page {props.match.params.id}</h1>
      <p>This is the detail page</p>
    </>
  );
}

export default Detail;

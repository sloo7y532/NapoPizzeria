import React from "react";
import "../Styles/Menu.css";

function menuItem({ name, image, price, Detailes }) {
  function handleDetails() {
    console.log("tgtgt");
    return (
      <div className="det">
        <p>edwedw</p>
      </div>
    );
  }

  return (
    <div className="menuItem" onClick={handleDetails}>
      <div className="img" style={{ backgroundImage: `url(${image})` }}> </div>
      <h1>{name}</h1>
      <p>${price}</p>
    </div>
  );
}

export default menuItem;

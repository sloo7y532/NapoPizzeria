import React from "react";
import { MenuData } from "../MenuData/menuData";
import "../Styles/Menu.css";
import MenuItem from "../Components/menuItem";

function Menu() {

  return (
    <div className="menu">
      <h1 className="ourMenu">Our Menu</h1>
      <div className="menuList">
        {MenuData.map((item, key) => {
          return (
            <div >
              <MenuItem
                key={key}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;

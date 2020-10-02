import React from "react";
import { NavLink } from "react-router-dom";

function Menu(props) {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        {props.menuData.map((item) => (
          <li className="nav-item" key={item.menuLabel}>
            <NavLink
              className="nav-link"
              to={item.menuLink}
              activeClassName="active"
              exact
            >
              {item.menuLabel}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;

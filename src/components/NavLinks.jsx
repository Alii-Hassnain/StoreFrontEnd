import React from "react";
import { Links } from "../LinkData";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  console.log(Links);
  return (
    <>
      {Links.map((data) => {  
        return (
          <li key={data.id}>
            <NavLink to={data.url}>
              <button>{data.text}</button>
            </NavLink>
          </li>
        );
      })}
    </>
    
  );
};
export default NavLinks

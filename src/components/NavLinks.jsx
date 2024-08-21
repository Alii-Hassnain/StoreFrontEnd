import React from "react";
import { Links } from "../LinkData";
import { NavLink } from "react-router-dom";
import userSlice from "../features/user/userSlice";
import { useSelector } from "react-redux";

const NavLinks = () => {


  const user = useSelector((state) => state.user.user);

  return (
    <>
      {Links.map((data) => {  

        if((data.url === "checkout" || data.url === "orders") && !user){
          return null;
        }

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

import React, { useState } from "react";
import { FaLeaf, FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import NavLinks from "./NavLinks.jsx";

import { useSelector } from "react-redux";

const Navbar = () => {

  const [theme,setTheme] = useState(false);
  const handleTheme = ()=>{
    setTheme(!theme);
  }

  const {numItemsInCart} = useSelector((state)=>state.cart)
 


  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        {/* start */}
        <div className="navbar-start">
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-3xl items-center"
          >
            Ali
          </NavLink>
          <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="text-2xl" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <NavLinks />
            </ul>
          </div>
        </div>

        {/* middle */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-3">
            <NavLinks />
          </ul>
        </div>
        {/* end */}
        <div className="navbar-end">
          <span className="swap swap-rotate">
            <input type="checkbox" onChange={handleTheme} />
            <FaMoon className="text-2xl swap-on"/>
            <MdSunny className="text-2xl swap-off" />
          </span>

          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="text-2xl" />
              <span className="badge badge-sm badge-primary indicator-item">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

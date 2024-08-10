import React from "react";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-3xl items-center"
          >
            Ali
          </NavLink>
          <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="text-2xl"/>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
            <li>
              <NavLink to="/">
                <button>Home</button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                <button>About</button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/products">
                <button>Products</button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                <button>Cart</button>
              </NavLink>
            </li>
              
              
            </ul>
          </div>
        </div>
        {/* start */}
        {/* middle */}
        <div className="navbar-center hidden lg:flex">

          <ul className="menu menu-horizontal gap-3">
            <li>
              <NavLink to="/">
                <button>Home</button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                <button>About</button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/products">
                <button>Products</button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                <button>Cart</button>
              </NavLink>
            </li>
          </ul>
          
        </div>
        {/* end */}
        <div className="navbar-end">
          <div className="btn btn-ghost text-xl">
            <FaMoon />
          </div>

          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
                <div className="indicator">
                  <BsCart3 className="text-2xl"/>
                  <span className="badge badge-sm badge-primary indicator-item">8</span>
                </div>
          </NavLink>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

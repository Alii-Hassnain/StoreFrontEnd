import React from "react";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-100">
      <div className="flex items-center p-3 justify-between align-element">
        {/* start */}
        <div>
          <button className="bg-primary p-4 px-6 rounded-lg font-bold text-xl text-white">
            A
          </button>
        </div>
        {/* middle */}
        <div className="flex flex-row gap-x-5">
          <Link to="/">
            <button className="btn btn-ghost">Home</button>
          </Link>
          <Link to="/about">
            <button className="btn btn-ghost">About</button>
          </Link>
          <Link to="/products">
            <button className="btn btn-ghost">Products</button>
          </Link>
          <Link to="/cart">
            <button className="btn btn-ghost">Cart</button>
          </Link>
          
        </div>
        {/* end */}
        <div className="flex gap-x-3">
          
          <div className="btn btn-ghost text-xl">
            <FaMoon />
          </div>
          <Link to='/cart'>
            <div className="btn btn-ghost text-xl">
              <BsCart3 />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

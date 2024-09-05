import React from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { logoutUser } from "../features/user/userSlice";

import { QueryClient, useQueryClient } from "@tanstack/react-query";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const queryClient = useQueryClient();

  const handleLogout = () => {
    
    navigate("/");
    dispatch(clearCart());
    dispatch(logoutUser());
    queryClient.removeQueries();

  };

  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="flex align-element justify-end">
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm">Hello, {user.username}</p>
            <button
              className="btn btn-xs btn-outline btn-primary "
              onClick={handleLogout}
            >
              logout
            </button>
          </div>
        ) : (
          <div className="flex justify-center gap-x-6">
            <Link to="/login" className="text-xs link-hover">
              Sign in / Guest
            </Link>
            <Link to="/register" className="text-xs link-hover">
              Create Account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

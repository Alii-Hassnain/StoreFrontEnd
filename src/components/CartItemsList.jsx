import React from "react";
import { useSelector } from "react-redux";

import CartItem from "./CartItem";

const CartItemsList = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div className="flex flex-col gap-5">
        {cartItems.map((item) => {
          return (   
              <CartItem key={item.cartID} cartItem={item} />
          );
        })}
    </div>
  );
};

export default CartItemsList;

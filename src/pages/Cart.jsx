import React, { useState } from "react";
import { CartItemsList } from "../components";
import { SectionTitle } from "../components";
import { CartTotals } from "../components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
  const user = useSelector((state) => state.user);
  const [itemsInCart, setItemsInCart] = useState();
  const { numItemsInCart } = useSelector((state) => state.cart);

  console.log(numItemsInCart);

  if (numItemsInCart === 0) {
    return (
      <div>
        <SectionTitle text="Your Cart is Empty" />
      </div>
    );
  }

  return (
    <div className="flex flex-row mt-10 justify-between">
      <div>
        <CartItemsList />
      </div>
      <div className="flex flex-col gap-4">
        <CartTotals />
        <button className="btn btn-primary">
          <Link to="/checkout" className="inline">
            Proceed to checkout
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Cart;

import React from "react";

import { useSelector } from "react-redux";
import { formatPrice } from "../utils";


const CartTotals = () => {

    const {shipping,tax,cartTotal,orderTotal} = useSelector((state)=>state.cart)
    

  return (
    <div className="card bg-neutral text-neutral-content w-96">
      <div className="card-body text-center">
        <h2 className="card-title text-white">Cart Total</h2>
        <div className="flex flex-row">
            <p>CartTotal </p>
            <p>{formatPrice(cartTotal)}</p>
        </div>
        <div className="flex flex-row">
            <p>tax</p>
            <p>{formatPrice(tax)}</p>
        </div>
        <div className="flex flex-row">
            <p>shipping </p>
            <p>{formatPrice(shipping)}</p>
        </div>
        <div className="flex flex-row">
            <p>orderTotal </p>
            <p>{formatPrice(orderTotal)}</p>
        </div>
        
        
      </div>
    </div>
  );
};

export default CartTotals;

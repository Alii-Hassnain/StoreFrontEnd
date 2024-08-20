import React, { useState } from "react";
import { useSelector } from "react-redux";
import { formatPrice } from "../utils";
import { generateAmountOptions } from "../utils";
import { useDispatch } from "react-redux";
import { editItem, removeItem } from "../features/cart/cartSlice";

const CartItem = ({ cartItem }) => {
  const { image, price, company, productColor, title, amount, cartID } = cartItem;
  const dispatch = useDispatch();
  const [select, setSelect] = useState(5);

  const handleAmount = (e) => {
    dispatch(editItem({cartID,amount:parseInt(e.target.value)}))
  };
  const handleRemoveLink = (e) =>{
    dispatch(removeItem({cartID}))
  } 

  console.log(productColor);
  

  return (
    <div key={cartItem.cartID} className="grid lg:grid-cols-4 gap-10">
      <div>
        <img className="w-32 h-32" src={image} alt={title} />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-black">{title}</h2>
        <h2 className="text-sm text-primary-content">{company}</h2>
        <button className="btn btn-circle btn-sm " style={{backgroundColor:productColor}}></button>
      </div>

      <div>
        <label htmlFor = "amount" className = "label p-0">
          <span>Amount</span>
        </label>
        <select
          value={amount}
          onChange={handleAmount}
          className="select select-bordered w-full max-w-xs"
        >
          {generateAmountOptions(amount + 5)}
        </select>

        <p onClick={handleRemoveLink} className="text-primary link-hover cursor-pointer">remove</p>
      </div>
      <div>
        <p>{formatPrice(price)}</p>
      </div>
    </div>
  );
};

export default CartItem;

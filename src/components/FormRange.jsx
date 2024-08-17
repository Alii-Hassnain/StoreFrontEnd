import React, { useState } from "react";
import { formatPrice } from "../utils";
import { useLoaderData } from "react-router-dom";

const FormRange = ({ label, name, size,defaultValue }) => {
  const {meta} = useLoaderData();
  
  const step = 1000;
  const maxPrice = 100000;
  const [selectedPrice, setSelectedPrice] = useState(defaultValue || maxPrice);

  return (
    <>
      <div className="form-control">
        <label htmlFor={name} className="lebel cursor-pointer ">
          <span className="label-text capitalize">{label}</span>
          <span>{formatPrice(selectedPrice)}</span>
        </label>
        <input
          type="range"
          min={0}
          max={maxPrice}
          name={name}
          defaultValue={defaultValue}
          
          onChange={(e) => setSelectedPrice(e.target.value)}
          className={`range range-primary ${size}`}
        />
        <div className="w-full flex justify-between text-xs px-2 mt-2">
          <span className="font-bold text-md">0</span>
          <span className="font-bold text-md">
            Max : {formatPrice(maxPrice)}
          </span>
        </div>
      </div>
    </>
  );
};

export default FormRange;

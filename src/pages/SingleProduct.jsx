import React, { useState } from "react";
import { CustomUri } from "../utils";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { SubmitBtn } from "../components";

export const loader = async ({ params }) => {
  const URL = `/products/${19}`;
  const response = await CustomUri(URL);
  const singleProduct = response.data.data;
  return { singleProduct };
};

const SingleProduct = () => {
  const [amount, setAmount] = useState(1);
  const { singleProduct } = useLoaderData();

  const { image, title, price, description, colors, company } =
    singleProduct.attributes;
  const [productColor, setProductColor] = useState(colors[0]);
  console.log(singleProduct);

  const handleAmount = (e)=>{
    setAmount(e.target.value)
  }
  return (
    <div className="mt-40">
      <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>

      <div className="grid lg:grid-cols-2 lg:gap-x-16 min-h-screen mt-6">
        {/* left */}
        <div>
          <img
            className="h-96 w-96 lg:w-full object-cover  rounded-md"
            src={image}
            alt={title}
          />
        </div>
        {/* right */}
        <div className="max-w-2xl flex flex-col gap-4">
          <h1 className="text-3xl text-gray-700 font-bold">{title}</h1>
          <h2 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h2>
          <h1 className="text-xl">${price / 100}</h1>
          <p className="leading-8">{description}</p>
          <div className="flex flex-col gap-4">
            <h1 className="text-md font-medium tracking-wider capitalize">
              Colors
            </h1>
            <div className="flex gap-3">
              {colors.map((color, index) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`badge w-6 h-6 mr-2 ${
                      color === productColor && "border-2 border-secondary"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-2xl">Amount</span>
              </div>
              <select 
              value={amount}
              onChange={handleAmount}
              className="select select-secondary select-md select-bordered w-full max-w-xs">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </label>

            <div className="w-1/4">
              <SubmitBtn text="ADD TO BAG" />
            </div>
          </div>
        </div>
        {/* end */}
      </div>
    </div>
  );
};

export default SingleProduct;

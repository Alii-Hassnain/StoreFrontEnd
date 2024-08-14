import React, { useState } from "react";
import { CustomUri } from "../utils";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { SubmitBtn } from "../components";

export const loader = async () => {
  const URL = `/products/${19}`;
  const response = await CustomUri(URL);
  const singleProduct = response.data.data;
  return { singleProduct };
};

const SingleProduct = () => {
  const [colored, setColor] = useState();
  const [amount, setAmount] = useState();
  const { singleProduct } = useLoaderData();

  const { image, title, price, description, color, company } =
    singleProduct.attributes;
  console.log(singleProduct);
  return (
    <div className="align-element py-44">

    <div className="breadcrumbs text-sm">
      <ul>
        <li>
          <Link to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products">
            Products
          </Link>
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
        <h2>{company}</h2>
        <h1>${price / 100}</h1>
        <p>{description}</p>
        <div className="flex flex-col gap-4">
          <h1 className="">Colors</h1>
          <div className="flex gap-3">
            <button className="btn btn-circle btn-sm bg-blue-600"></button>
            <button className="btn btn-circle btn-sm bg-green-400"></button>
          </div>

          <h1>Amount</h1>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              1
            </option>
            <option>2</option>
            <option>3</option>
          </select>

          <div className="w-1/4">
          <SubmitBtn text="ADD TO BAG"/>

          </div>
          
        </div>
      </div>
      {/* end */}
    </div>

    </div>
  );
};

export default SingleProduct;

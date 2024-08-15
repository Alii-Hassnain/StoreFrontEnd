import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ProductsList = () => {
  const { products } = useLoaderData();
  console.log(products);
  return (
    <div className="grid grid-rows-3">
      {products.map((products) => {
        const { title, price, image,company } = products.attributes;
        const dollarAmount = price / 100;
        return (
          <Link
            to={`/products/${products.id}`}
            key={products.id}
            className="card lg:card-side md:card-side sm:card-side card-side bg-base-100 shadow-xl hover:shadow-2xl mt-4"
          >
            <figure>
              <img className="w-72 h-72 object-cover" src={image} alt={title} />
            </figure>
            <div className="card-body">
              <div >
                <h2 className="card-title font-xl">{title}</h2>
                <h3 className="text-primary-content font-2xl">{company}</h3>
                <p className="text-lg font-bold text-end">${dollarAmount}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsList;

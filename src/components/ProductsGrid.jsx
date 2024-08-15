import React, { Profiler } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductsGrid = () => {
  const { products } = useLoaderData();
  console.log(products);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      {products.map((data) => {
        const { title, price, image } = data.attributes;
        const dollarAmount = price / 100;
        return (
          <Link
            to={`/products/${data.id}`}
            key={data.id}
            className="card cursor-pointer bg-base-100 h-96 hover:shadow-2xl shadow-xl transition duration-300"
          >
            <figure className="px-8 pt-8">
              <img className="rounded-xl h-96 w-96 object-cover" src={image} alt={title} />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{title}</h2>
              <p>${dollarAmount}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsGrid;

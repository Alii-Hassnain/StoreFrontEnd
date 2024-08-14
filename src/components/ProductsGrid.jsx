import React, { Profiler } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductsGrid = () => {
  const { products } = useLoaderData();
  console.log(products);

  const featuredProducts = products.filter(
    (product) => product.attributes.featured === true
  );

  console.log(featuredProducts);

  return (
    <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-col-1 gap-y-2 mb-10">
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
              <img className="rounded-xl" src={image} alt={title} />
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

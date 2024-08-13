import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductsGrid = () => {
  const {products} = useLoaderData();
  console.log(products);

  const featuredProducts = products.filter(
    (product) => product.attributes.featured === true
  );

  console.log(featuredProducts);

  return (
    <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-col-1 gap-y-2 mb-10">
      {featuredProducts.map((data) => {
        return( 
        <div className="card cursor-pointer bg-base-100 h-96 hover:shadow-xl">
        <figure className="px-8 pt-8">
          <img
            className="rounded-xl" 
            src={data.attributes.image}
            alt={data.attributes.title}
        />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{data.attributes.title}</h2>
          <p>${data.attributes.price / 100}</p>
        </div>
      </div>
      )
      })}
    </div>
  );
};

export default ProductsGrid;

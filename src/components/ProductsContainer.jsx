import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { IoGrid } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import SectionTitle from "./SectionTitle";

const ProductsContainer = () => {
  const { products,meta } = useLoaderData();
  const [ layout, setLayout ] = useState("");
  const totalProducts = meta.pagination.total;

  const setActiveStyle = (pattern) => {
    return `text-xl btn btn-circle ${pattern === layout ? "btn-primary text-primary-content":"btn-ghost text-base-content"}`
  };

  return (
    <>
      <div>
        <SectionTitle text={`${totalProducts} Products`} />
      </div>

      <div className="flex justify-end mb-4">
        <button
          className={setActiveStyle("grid")}
          onClick={() => setLayout("grid")}
        >
          <BsList />
        </button>
        <button
          className={setActiveStyle("list")}
          onClick={() => setLayout("list")}
        >
          <IoGrid />
        </button>
      </div>

      {totalProducts === 0 ? (
        <h1 className="text-2xl mt-16">
          Sorry , no Products matched your Search ...{" "}
        </h1>
      ) : layout === "list" ? (
        <ProductsGrid />
      ) : (
        <ProductsList />
      )}
    </>
  );
};

export default ProductsContainer;

{
  /* <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-4">
        {products.map((products, index) => {
          const { image, title, description, price } = products.attributes;
          const DollarPrice = price / 100;
          return (
            <div
              className="cursor-pointer shadow-lg hover:shadow-2xl"
              key={products.id}
            >
              <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    src={image}
                    alt={title}
                    className="w-96 h-60 object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{title}</h2>
                  <p>${DollarPrice}</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div> */
}

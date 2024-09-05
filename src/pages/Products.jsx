import React from "react";
import { CustomUri } from "../utils";
import { resolvePath, useLoaderData } from "react-router-dom";
import { ProductContainer } from "../components";
import { Filter } from "../components";
import { PaginationContainer } from "../components";

// export const loader = async ({request}) => {
//   console.log(request);
//   const response = await CustomUri(
//     "/products"
//   );
//   const products = response.data.data;
//   const meta = response.data.meta;
//   return { products, meta ,response };
// };
const url = "/products";

// export const loader = async ({request})=>{
//   console.log(request);
//   const params = Object.fromEntries([
//     ...new URL(request.url).searchParams.entries(),
//   ]);
//   const response = await CustomUri(url,{params});

//   const products = response.data.data;
//   const meta = response.data.meta;

//   return {products,meta,params};
// };

const allProductsQuery = (queryParams) => {
  const {search,category,company,sort,price,shipping,page} = queryParams;

  return {
    queryKey : [
      "products",
      search ?? "",
      category ?? "all",
      company ?? "all",
      sort ?? "a-z",
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn : () => CustomUri.get(url,{params:queryParams})
  }
}

export const loader = (queryClient) => async ({request})=>{
  console.log(request);
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  // const response = await CustomUri(url,{params});
  const response = await queryClient.ensureQueryData(
    allProductsQuery(params)
  );

  const products = response.data.data;
  const meta = response.data.meta;

  return {products,meta,params};
};



const Products = () => {
  return (
    <div>
      <Filter />
      <ProductContainer />
      <PaginationContainer />
    </div>
  );
};

export default Products;

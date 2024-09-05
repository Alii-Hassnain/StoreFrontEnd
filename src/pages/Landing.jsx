import React from "react";
import { Hero } from "../components";
import { CustomUri } from "../utils";
import { FeaturedProducts } from "../components";
import { QueryClient } from "@tanstack/react-query";

// export const loader = async ()=>{
//   const dataSet = await CustomUri("/products?featured=true");
//   const products = dataSet.data.data;
//   console.log(products);
//   return {products};
// }

const featuredProductsQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => CustomUri.get("/products?featured=true"),
};

export const loader = (queryClient) => async () => {
  const reponse = await queryClient.ensureQueryData(featuredProductsQuery);
  console.log("here it is..");
  const products = reponse.data.data;
  return { products };
};

const Landing = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
    </div>
  );
};

export default Landing;

import React from "react";
import axios from "axios";

const productsUri = "https://strapi-store-server.onrender.com/api";
export const CustomUri = axios.create({
  baseURL: productsUri,
});

export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));
  return dollarsAmount;
};



import React from "react";
import axios from "axios";

const productsUri = "https://strapi-store-server.onrender.com/api";
export const CustomUri = axios.create({
  baseURL: productsUri,
});



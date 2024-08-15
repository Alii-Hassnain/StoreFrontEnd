import React from 'react'
import { CustomUri } from '../utils'
import { useLoaderData } from 'react-router-dom';
import { ProductContainer } from '../components';
import { Filter } from '../components';
import { PaginationContainer } from "../components"


export const loader = async ()=>{
  const response = await CustomUri("/products");
  const products = response.data.data;
  return {products,response};
}

const Products = () => {
  
  return (

    <div>
      <Filter />
      <ProductContainer/>
      <PaginationContainer/>
    </div>
  )
}

export default Products
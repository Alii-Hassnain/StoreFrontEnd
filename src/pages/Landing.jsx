import React from 'react'
import { Hero } from '../components'
import { CustomUri } from '../utils'
import {FeaturedProducts} from "../components"


export const loader = async ()=>{
  const dataSet = await CustomUri("/products");
  const products = dataSet.data.data;
  console.log(products);
  return {products};
}

const Landing = () => {
  return (
    <div>
      <Hero/>
      <FeaturedProducts/>
    </div>
  )
}

export default Landing
import React from 'react'
import { OrdersList } from '../components'
import { CustomUri } from '../utils'


const loader = async ({request})=>{
  try {
    const data = await CustomUri.get("/orders");
    console.log(data);
  } catch (error) {
    console.log(error);
    
  }
}



const Orders = () => {
  return (
    <div>
        <OrdersList/>

    </div>
  )
}

export default Orders
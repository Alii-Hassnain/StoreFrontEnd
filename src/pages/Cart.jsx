import React, { useState } from 'react'
import { CartItemsList } from '../components'
import {SectionTitle} from '../components'
import {CartTotals} from '../components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Cart = () => {
  const user = null;
  const [itemsInCart,setItemsInCart] = useState();
  const {numItemsInCart} = useSelector((state)=>state.cart)
  console.log(numItemsInCart);

  if(numItemsInCart === 0){
    return(
      <div>
        <SectionTitle text = "Your Cart is Empty" />
      </div>
    )
  }
  
  return (
    <div>
      <SectionTitle text = "Shopping Cart" />
      <CartTotals/>


    </div>
  )
}

export default Cart
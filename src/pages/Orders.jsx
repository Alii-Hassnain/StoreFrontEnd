import React from 'react'
import { OrdersList, PaginationContainer, SectionTitle } from '../components'
import { CustomUri } from '../utils'
import { store } from '../store'
import { toast } from 'react-toastify'
import { redirect } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'


export const loader =(store) => async ({request})=>{

  const user = store.getState().user.user;
  if(!user){
    toast.warn("You must be logged in to view orders");
    return redirect("/login");
  }

  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  try {
    const response = await CustomUri.get("/orders",{
      params,
      headers:{
        Authorization:`Bearer ${user.token}`,
      }
    });
    
    return {
      orders:response.data.data,
      meta:response.data.meta,
    };



  } catch (error) {
    console.log(error);
    const errorMessage = error?.reponse?.data?.error?.message ||
    "there was an error accessing your orders";

  }
}



const Orders = () => {
  const {orders,meta} = useLoaderData();
  console.log(orders);
  console.log(meta);

  if(meta.pagination.total < 1 ){
    return (
      <div>
        <SectionTitle text="Please make an order"/>
      </div>
    )
  } 

  return (
    <div>
      <SectionTitle text = "your Orders"/>
      <OrdersList/>
      <PaginationContainer/>
    </div>
  )
}

export default Orders
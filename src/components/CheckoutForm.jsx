import React from 'react'
import FormInput from './FormInput'
import { Form } from 'react-router-dom'
import SubmitBtn from './SubmitBtn'

const CheckoutForm = () => {
  return (
    <div>
      <Form
        method='post'
        className='flex flex-col gap-5'
      >
        <h1 className='font-bold text-xl'>Shipping Information</h1>
        <FormInput label="First Name" name = "name" />
        <FormInput label= "Address" name = "address"/>
        <SubmitBtn text="place Order" />
      </Form>
    </div>
  )
}

export default CheckoutForm
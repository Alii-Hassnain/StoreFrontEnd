import React from 'react'
import {Link,Form} from "react-router-dom"
import { FormInput } from '../components'
import { SubmitBtn } from '../components'
import { redirect } from 'react-router-dom'
import { CustomUri } from '../utils'
import { toast } from 'react-toastify'


export const action = async ({request})=>{
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try{
    const reponse = await CustomUri.post("/auth/local/register",data);
    toast.success("account created successfully");
    return redirect("/login");
  } catch(error){
    const errorMessage = error?.response?.data?.error?.message || "Please double check your credential";
    toast.error(errorMessage);
    return null;
  }
}


const Register = () => {
  return (
    <section  className='min-h-screen grid place-items-center'>
      <Form
        method = "post"
        className="card w-96 p-8 rounded-lg shadow-lg gap-4"
      >
        <h1 className='text-center text-3xl font-bold mb-4'>Register</h1>
        <FormInput name="username" type="text" label="Username"/>
        <FormInput name="email" type="text" label="Email"/>
        <FormInput name="password" type="text" label="Password"/>

        <SubmitBtn text="Register"/>

        <p className='text-center'>
          Already a member ?
          <Link to="/login" className='link link-hover link-secondary ml-3'>Login</Link>
        </p>


      </Form>
    </section>
  )
}

export default Register
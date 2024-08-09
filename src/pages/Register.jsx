import React from 'react'
import {Link,Form} from "react-router-dom"
import { FormInput } from '../components'
import { SubmitBtn } from '../components'

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
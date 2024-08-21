import React from "react";
import { FormInput } from "../components";
import { SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";



export const action = (store)=> async ()=>{
  console.log(store);
  return store;
}




const Login = () => {
  return (
    <div className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card bg-base-100 p-8 w-96 shadow-xl flex-col gap-4"
      >
        <h1 className="text-center font-bold text-3xl">Login</h1>
        <FormInput type="text" label="Email" defaultValue="" name="email" />
        <FormInput
          type="text"
          label="Password"
          defaultValue=""
          name="password"
        />
        <div>
          <SubmitBtn text="LOGIN" />
        </div>
        <button type="button" className="btn btn-secondary">
          GUEST USER
        </button>
        <p className="text-center">
          Don't have an account?
          <Link to="/register" className="ml-3 link-hover link-primary">
            Create Account
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;

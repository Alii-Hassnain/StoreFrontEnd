import React from "react";
import { FormInput } from "../components";
import { SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";
import { redirect } from "react-router-dom";
import { CustomUri } from "../utils";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";




export const action = (store)=> async ({request})=>{
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try{
    const response = await CustomUri.post("/auth/local",data);
    const datum = response.data;
    store.dispatch(loginUser(datum));
    toast.success("logged in successfully");
    return redirect("/");
  } catch (error){
    console.log(error);
    const errorMessage = error?.response?.data?.error?.message || 
    "please double check your credentials";
    toast.error(errorMessage);
    return null;
  }
}


const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginGuestUser = async () =>{

    try{
      const response = await CustomUri.post("/auth/local",{
        identifier: "test@test.com",
        password: "secret",
      });
      dispatch(loginUser(response.data));
      toast.success("welcome guest user");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("guest user login error.please try later..");
    }
  }

  return (
    <div className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card bg-base-100 p-8 w-96 shadow-xl flex-col gap-4"
      >
        <h1 className="text-center font-bold text-3xl">Login</h1>
        <FormInput type="text" label="Email" defaultValue="" name="identifier" />
        <FormInput
          type="text"
          label="Password"
          defaultValue=""
          name="password"
        />
        <div>
          <SubmitBtn text="LOGIN" />
        </div>
        <button onClick={loginGuestUser} type="button" className="btn btn-secondary">
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

import React from "react";
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "./pages";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path:"singleproduct",
          element:<SingleProduct/>
        },
        {
          path:"cart",
          element:<Cart/>

        },
        {
          path:"checkout",
          element:<Checkout/>

        },
        {
          path:"orders",
          element:<Orders/>
        },
        
      ],
    },
    {
      path:"/login",
      element:<Login/>,
      errorElement:<Error/>
    },
    {
      path:"/register",
      element:<Register/>,
      errorElement:<Error/>
    }
  ]

  
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

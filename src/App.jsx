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
import { loader as LandingLoader } from "./pages/Landing.jsx";
import { loader as SingleProductLoader } from "./pages/SingleProduct.jsx";
import { loader as ProductsLoader } from "./pages/Products.jsx";
import {loader as CheckOutLoader } from "./pages/Checkout.jsx";
import {loader as OrdersLoader} from "./pages/Orders.jsx";

import { ErrorElement } from "./components";
import { ToastContainer } from "react-toastify";

import { action as loginAction } from "./pages/Login";
import { action as registerAction } from "./pages/Register";
import { action as checkOutAction} from "./pages/Checkout.jsx";

import { store } from "./store.js";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";


import {QueryClient,QueryClientProvider} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { FaLeaf } from "react-icons/fa";


const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime: 1000 * 60 * 5,
    },
  },
});



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: LandingLoader(queryClient),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: ProductsLoader(queryClient),
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: SingleProductLoader(queryClient),
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
        errorElement: <ErrorElement />,
        action:checkOutAction(store,queryClient),
        loader:CheckOutLoader(store)
      },
      {
        path: "orders",
        element: <Orders />,
        loader:OrdersLoader(store,queryClient),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
]);

const App = () => {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen = {false} />
    </QueryClientProvider>
    </>
  );
};

export default App;

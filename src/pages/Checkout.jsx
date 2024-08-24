import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SectionTitle, SubmitBtn } from "../components";
import { CartTotals } from "../components";
import { CheckoutForm } from "../components";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";
import { CustomUri, formatPrice } from "../utils";
import { clearCart } from "../features/cart/cartSlice";

export const loader = (store) => () => {
  const user = store.getState().user.user;
  

  if (!user) {
    toast.warn("you must logged in to checkout");
    return redirect("/login");
  }
  return null;
};

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);

    const cart = store.getState().cart;
    const user = store.getState().user.user;
    console.log(cart);
    console.log(user.token);

    const { cartItems, cartTotal, numItemsInCart, orderTotal } =
      store.getState().cart;

    const info = {
      address: address,
      cartItems: cartItems,
      chargeTotal: orderTotal,
      name: name,
      numItemsInCart: numItemsInCart,
      orderTotal: formatPrice(orderTotal),
    };

    try {
      const response = await CustomUri.post(
        "/orders",
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      store.dispatch(clearCart());
      toast.success("order placed successfully");
      return redirect("/orders");
    } catch (error) {
      console.log(error);
      toast.error("Error creating order");
      return null;
    }
  };
const Checkout = () => {
  const { cartTotal } = useSelector((state) => state.cart);

  if (!cartTotal) {
    return <SectionTitle text="Your cart is Empty" />;
  }

  return (
    <div className="mt-10">
      <SectionTitle text="Proceed To Checkout" />
      <div className="grid grid-cols-2 gap-10">
        <CheckoutForm />
        <CartTotals />
      </div>
    </div>
  );
};

export default Checkout;

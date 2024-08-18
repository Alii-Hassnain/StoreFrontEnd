
import {createSlice} from "@reduxjs/toolkit"
import { act } from "react";
import {toast} from "react-toastify"

const defaultState = {
    cartItems:[],
    numItemsInCart:0,
    cartTotal:0,
    shipping:500,
    tax:0,
    orderTotal:0
}

const cartSlice = createSlice({
    name:"cart",
    initialState:defaultState,
    reducers:{
        addItem:(state,action)=>{
            const {product} = action.payload;
            console.log(product);
            let item = state.cartItems.find((i)=>i.cartID === product.cartID); 
            
            if(item){
                console.log("this is running");
                item.amount += product.amount;
                console.log(item);
                
            }else{
                console.log("here it is ");
                state.cartItems = [...state.cartItems,product];
            }
            console.log(state.cartItems);
            

            state.numItemsInCart = state.cartItems.length
            state.cartTotal = state.cartItems.reduce((acc,cur)=>acc+cur.price * cur.amount,0)
            state.orderTotal = state.cartTotal + state.shipping + state.tax  
            localStorage.setItem("cart",JSON.stringify(state));
            return state;
            

        },
        removeItem:(state)=>{

        },
        editItem:(state,action)=>{

        },
        clearCart:(state,action)=>{

        }


    }
})
export const {addItem,removeItem,editItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;
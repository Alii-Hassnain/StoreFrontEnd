
import {createSlice} from "@reduxjs/toolkit"

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
import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import meal from "../model/meal"

interface cart{
    meals:meal[]
}

const initialState:cart = {
    meals:[]
}

export const CartSlice = createSlice({  
    name:'meals',
    initialState,
    reducers:{
        addMeal : (state,action:PayloadAction<meal>) =>{
                state.meals.push(action.payload)
        }
    }
})  
export default CartSlice.reducer
export  const {addMeal} = CartSlice.actions
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import meal from "../model/meal";

interface cart {
  meals: meal[];
  totalQuantity: number;
  totalBill: number;
}

const initialState: cart = {
  meals: [],
  totalQuantity: 0,
  totalBill: 0,
};

export const cartSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    addMeal: (state, action: PayloadAction<meal>) => {
      state.totalQuantity += action.payload.quantity;
      const existCoffee = state.meals.find(
        (item) => item.name === action.payload.name
      );
      if (existCoffee) {
        const indexExitstCoffee = state.meals.findIndex(
          (item) => item.name === existCoffee.name
        );
        state.meals[indexExitstCoffee].quantity += action.payload.quantity;
        state.totalBill = state.meals.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.quantity * currentValue.money;
        }, 0);
      } else {
        state.meals.push(action.payload);
      }
      state.totalBill = state.meals.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.quantity * currentValue.money;
      }, 0);
    },
    increaseMeal: (state, action: PayloadAction<meal>) => {
      const coffee = state.meals.find(
        (item) => item.name === action.payload.name
      );
      const indexCoffee = state.meals.findIndex(
        (item) => item.name === coffee!.name
      );
      state.totalQuantity += 1
      state.meals[indexCoffee].quantity += 1;
      state.totalBill = state.meals.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.quantity * currentValue.money;
      }, 0);
    },
    decreaseMeal: (state, action: PayloadAction<meal>) => {
      const coffee = state.meals.find(
        (item) => item.name === action.payload.name
      );
      state.totalQuantity -= 1
      const indexCoffee = state.meals.findIndex(
        (item) => item.name === coffee!.name
      );
      const newQuantity = action.payload.quantity -1
      

      if (newQuantity > 0) {
        state.meals[indexCoffee].quantity = newQuantity;
        state.totalBill = state.meals.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.quantity * currentValue.money;
        }, 0);
      }else if (newQuantity === 0){
        const newMeals = state.meals.filter((item)=>item.name !== coffee!.name)
        state.meals = newMeals
        state.totalBill = state.meals.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.quantity * currentValue.money;
          }, 0);
      }
    },
    clearMeal : (state) =>{
      state.meals = []
      state.totalBill = 0
      state.totalQuantity =0
    }
  },
});
export default cartSlice.reducer;
export const { addMeal, increaseMeal,decreaseMeal,clearMeal } = cartSlice.actions;

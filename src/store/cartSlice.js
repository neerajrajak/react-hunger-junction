import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // vanilla redux(old) says: dnt mutate state and returning new state is mandatory
      //   const newState = [...state];
      //   newState.items.push(action.payload);
      //   return newState;

      // Redux toolkit mandates to mutate state and returning is not mandatory
      // Redux toolkit is doing the same thing behind the scene
      // it uses immer library to compare old and new change and return new state
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      // RTK says - either you mutate the state or return a new state
      // return { items: [] } is also fine in place of length = 0
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

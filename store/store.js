import { configureStore } from "@reduxjs/toolkit";
import expenseSlice from "./expenseSlice";

const store = configureStore({
  reducer: {
    expense: expenseSlice,
  },
});

export default store;

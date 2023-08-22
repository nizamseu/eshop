import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { API_Query } from "./API_Query/APIQuery";
import AuthSlice from "./API_Slices/AuthSlice";
import cartSlice from "./API_Slices/cartSlice";

export const store = configureStore({
  reducer: {
    userSlice: AuthSlice,
    cartSlice: cartSlice,
    [API_Query.reducerPath]: API_Query.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(API_Query.middleware),
  serializableCheck: false,
});
setupListeners(store.dispatch);

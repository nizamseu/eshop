import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartData:
      typeof localStorage !== "undefined"
        ? JSON.parse(localStorage.getItem("cartData")) || []
        : [],
    isCartShow: false,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProductIndex = state.cartData.findIndex(
        (item) => item.id === product.id
      );
      if (existingProductIndex !== -1) {
        // Product already exists in cart, update quantity
        state.cartData[existingProductIndex].quantity += 1;

        // SuccessAlert("Course Alreday Added", "error");
      } else {
        // Product does not exist in cart, add it
        console.log("product", product);
        state.cartData.push({ ...product, quantity: 1 });

        // SuccessAlert("Course Added", "success");
      }

      // Store updated cart data in session storage
      localStorage.setItem("cartData", JSON.stringify(state.cartData));
    },
    removeFromCart: (state, action) => {
      const product = action.payload;
      // Find index of product in cart
      const productIndex = state.cartData.findIndex(
        (item) => item.slug === product.slug
      );
      if (productIndex !== -1) {
        // Subtract price of removed product from total price

        // Store updated cart data and total price in session storage
        localStorage.setItem("cartData", JSON.stringify(state.cartData));
      }
    },
    incrementQuantity: (state, action) => {
      const product = action.payload;
      const existingProductIndex = state.cartData.findIndex(
        (item) => item.slug === product.slug
      );
      if (existingProductIndex !== -1) {
        state.cartData[existingProductIndex].quantity += 1;
        localStorage.setItem("cartData", JSON.stringify(state.cartData));
      }
    },
    decrementQuantity: (state, action) => {
      const product = action.payload;
      const existingProductIndex = state.cartData.findIndex(
        (item) => item.slug === product.slug
      );
      if (existingProductIndex !== -1) {
        if (state.cartData[existingProductIndex].quantity === 1) {
          state.cartData.splice(existingProductIndex, 1);
        } else {
          state.cartData[existingProductIndex].quantity -= 1;
        }
        localStorage.setItem("cartData", JSON.stringify(state.cartData));
      }
    },
    clearCart: (state) => {
      state.cartData = [];
      state.OrderData = [];
      state.totalPrice = 0;
      // Clear cart data from session storage
      localStorage.removeItem("cartData");
      localStorage.removeItem("OrderData");
      localStorage.removeItem("totalPrice");
      localStorage.removeItem("discount");
      localStorage.removeItem("coupon");
    },
    handleIsCartShow: (state, action) => {
      state.isCartShow = action.payload;
    },
  },
});

export const {
  decrementQuantity,
  incrementQuantity,
  handleIsCartShow,
  addToCart,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

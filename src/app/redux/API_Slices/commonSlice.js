import { createSlice } from "@reduxjs/toolkit";

const commonSlice = createSlice({
  name: "common",
  initialState: {
    isCartShow: false,
    isLeftOffset: false,
    isMobileSearch: false,
    isShowModal: false,
  },
  reducers: {
    handleIsCartShow: (state, action) => {
      state.isCartShow = action.payload;
      state.isLeftOffset = false;
    },
    handleLeftOffset: (state, action) => {
      state.isLeftOffset = action.payload;
      state.isCartShow = false;
    },
    handleMobileSearch: (state, action) => {
      state.isMobileSearch = action.payload;
      state.isCartShow = false;
      state.isLeftOffset = false;
    },
    handleProductModal: (state, action) => {
      state.isShowModal = action.payload;
      // state.isCartShow = false;
      // state.isLeftOffset = false;
      // state.isMobileSearch = false;
    },
  },
});

export const {
  handleProductModal,
  handleMobileSearch,
  handleIsCartShow,
  handleLeftOffset,
} = commonSlice.actions;

export default commonSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const commonSlice = createSlice({
  name: "common",
  initialState: {
    isCartShow: false,
  },
  reducers: {
    handleIsCartShow: (state, action) => {
      state.isCartShow = action.payload;
    },
  },
});

export const { handleIsCartShow } = commonSlice.actions;

export default commonSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { authLogin } from "./authThunk";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(authLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(authLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default usersSlice.reducer;
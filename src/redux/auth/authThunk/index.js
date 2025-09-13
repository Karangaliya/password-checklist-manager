import { createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "../../../config/axios";
import { endPoints } from "../../../config/endPoint";

export const authLogin = createAsyncThunk(
  "auth/authLogin",
  async (_, { rejectWithValue }) => {
    try {
      const response = await Axios.get(endPoints.authLogin); // ✅ using axios instance
      return response?.data?.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Something went wrong"
      );
    }
  }
);
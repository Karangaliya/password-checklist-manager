import { createAsyncThunk } from "@reduxjs/toolkit";
import { endPoints } from "../../../config/endPoint";
import { Axios } from "../../../service/axios";

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
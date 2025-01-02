import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.withCredentials = true;

export const login = createAsyncThunk(
  "login",
  async ({ user, router }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/login`,
        user,
      );
      router.push("/dashboard");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const logout = createAsyncThunk(
  "logout",
  async (router, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/logout`,
      );
      router.push("/login");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const initialState = {
  isLoading: false,
  data: null,
  isError: false,
};

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.user;
      document.cookie = `access_token=${action.payload.token}; path=/; expires=${new Date(
        Date.now() + 30 * 86400000,
      ).toUTCString()}; secure; sameSite=strict`;
      localStorage.setItem("user", JSON.stringify(action.payload));
    });
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.rejected, (state) => {
      state.isError = true;
      console.log("Some error occurred during login");
    });

    builder.addCase(logout.fulfilled, (state) => {
      state.isLoading = false;
      state.data = null;
      localStorage.removeItem("user");
    });
    builder.addCase(logout.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logout.rejected, (state) => {
      state.isError = true;
      console.log("Some error occurred during logout");
    });
  },
});

export const { updateUser } = authSlice.actions;
export default authSlice.reducer;

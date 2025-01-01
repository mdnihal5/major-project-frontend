import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.withCredentials = true;

export const signIn = createAsyncThunk("signIn", async (user) => {
	const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/auth/signin`, user);
	return response.data;
});

export const signUp = createAsyncThunk("signUp", async (user) => {
	const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/auth/signup`, user);
	return response.data;
});

export const signOut = createAsyncThunk("signOut", async () => {
	const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/auth/signout`);
	return response.data;
});

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
		builder.addCase(signIn.fulfilled, (state, action) => {
			state.isLoading = false;
			state.data = action.payload.user;
			document.cookie = `access_token=${action.payload.token}; path=/; expires=${new Date(Date.now() + 30 * 86400000).toUTCString()}; secure; sameSite=strict`;
			toast.success("Login Successfull");
			localStorage.setItem("user", JSON.stringify(action.payload));
		});
		builder.addCase(signIn.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(signIn.rejected, (state) => {
			state.isError = true;
			toast.error("Login Failed");
			console.log("some error occured ");
		});

		builder.addCase(signUp.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(signUp.fulfilled, (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
			localStorage.setItem("user", JSON.stringify(action.payload));
		});
		builder.addCase(signUp.rejected, (state) => {
			state.isError = true;
			console.log("some error occured ");
		});

		builder.addCase(signOut.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(signOut.fulfilled, (state) => {
			state.isLoading = false;
			state.data = null;
			toast.success("Logout Successfull");
			localStorage.removeItem("user");
		});
		builder.addCase(signOut.rejected, (state) => {
			state.isError = true;
			toast.error("Logout Failed");
			console.log("some error occured ");
		});
	},
});

export const { updateUser } = authSlice.actions;
export default authSlice.reducer;

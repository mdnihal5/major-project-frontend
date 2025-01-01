import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.withCredentials = true;

// Fetch posts
export const getPosts = createAsyncThunk("getPosts", async () => {
	const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/blog/getposts`);
	return response.data.posts;
});

// Delete post
export const deletePost = createAsyncThunk("deletepost", async ({ _id, userId }) => {
	await axios.delete(`${import.meta.env.VITE_SERVER_URL}/api/blog/deletepost/${_id}/${userId}`, {
		headers: {
			"Content-Type": "application/json",
		},
	});
});

// Add post
export const addPost = createAsyncThunk("addpost", async ({ newPost }) => {
	const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/blog/create`, newPost, {
		headers: {
			"Content-Type": "application/json",
		},
	});
	return response.data;
});

const initialState = {
	data: [
		{
		  title: "The Future of AI in Education",
		  description: "By Dr. Jane Smith | 5 min read",
		  content: "Exploring how artificial intelligence is shaping the future of education and learning.",
		},
		{
		  title: "Sustainable Engineering Practices",
		  description: "By Prof. John Doe | 7 min read",
		  content: "Discussing the importance of sustainability in modern engineering and its global impact.",
		},
		{
		  title: "The Rise of Quantum Computing",
		  description: "By Dr. Alice Johnson | 6 min read",
		  content: "An overview of quantum computing and its potential to revolutionize various industries.",
		},
	  ],
	isLoading: false,
	isError: false,
};

const blogSlice = createSlice({
	name: "Blog",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// Get posts
		builder.addCase(getPosts.fulfilled, (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		});
		builder.addCase(getPosts.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getPosts.rejected, (state) => {
			state.isError = true;
			console.log("some error occurred");
		});

		// Add post
		builder.addCase(addPost.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(addPost.fulfilled, (state, action) => {
			state.isLoading = false;
			toast.success("Post added successfully");
			state.data.push(action.payload);
		});
		builder.addCase(addPost.rejected, (state) => {
			state.isError = true;
			toast.error("Could not add post");
			console.log("some error occurred");
		});

		// Delete post
		builder.addCase(deletePost.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(deletePost.fulfilled, (state, action) => {
			state.isLoading = false;
			const deletedPostId = action.meta.arg._id; // Assuming action.meta.arg contains the arguments passed to the thunk
			state.data = state.data.filter((post) => post._id !== deletedPostId);
			toast.success("Post deleted successfully");
		});
		builder.addCase(deletePost.rejected, (state) => {
			toast.error("Couldn't delete post");
			state.isError = true;
			console.log("some error occurred");
		});
	},
});

export default blogSlice.reducer;

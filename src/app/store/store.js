import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import blogReducer from "./slices/blog"
export const store = configureStore({
    reducer: {
        user: authReducer,
        blogs: blogReducer,
    },
});


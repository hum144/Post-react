import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000"; 

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(`${API_URL}/getPost`);

  return response.data;
});

export const createPost = createAsyncThunk("posts/createPost", async (newPost) => {
  const response = await axios.get(`${API_URL}/createPost?name=${newPost.name}&description=${newPost.description}`);
  return response.data;
});

export const deletePost = createAsyncThunk("posts/deletePost", async (postId) => {
  const response = await axios.delete(`${API_URL}/deletePost/${postId}`);
  return response.data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    list: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.list = state.list.filter((post) => post.id !== action.payload.id);
      });
  },
});

export default postsSlice.reducer;
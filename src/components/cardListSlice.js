import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const baseURL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = createAsyncThunk('cardListSlice/fetchPosts', async () => {
  try {
    const posts = await fetch(`${baseURL}/posts`);
    const postsJson = await posts.json();
    return postsJson
  } catch (error) {
    console.log(error)
  }
})

const initialState = {
posts: [],
error: false,
isloading: true
}

const cardListSlice = createSlice({
  name: "cardListSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
        state.isloading = true;
        state.error = false;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload
    });
    builder.addCase(fetchPosts.rejected, (state) => {
    state.isloading = false;
    state.error = true
    });

  }
});


// export const { getPosts }  = cardListSlice.actions

export default cardListSlice.reducer

export const selectPosts = (state) => state.posts.posts
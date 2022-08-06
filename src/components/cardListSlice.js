import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';
import getPosts from '../api/api';


const initialState = {
posts: [],
error: false,
isloading: true
}

const cardListSlice = createSlice({
  name: "cardListSlice",
  initialState,
  reducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
        state.isloading = true;
        state.error = false;
    });
    builder.addCase(getPosts.fulfilled, (state, actions) => {
        state.posts = actions.payload
    });
    builder.addCase(getPosts.rejected, (state) => {
    state.isloading = false;
    state.error = true
    });

  }
});

// export const { getPosts }  = cardListSlice.actions

export default cardListSlice.reducer

export const selectedPosts = (state) => state.posts
import { createSlice } from "@reduxjs/toolkit";
import posts from '../data/posts.json';

const tuitsSlice = createSlice({
    name: 'posts',
    initialState: posts
});

export default tuitsSlice.reducer;
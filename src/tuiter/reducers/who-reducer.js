import { createSlice } from "@reduxjs/toolkit";
import whoArray from "../data/who.json";

const whoSlice = createSlice({
    name: "who",
    initialState: whoArray // json file under data folder
});

export default whoSlice.reducer;
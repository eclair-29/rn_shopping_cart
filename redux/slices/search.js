import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: "search",
    initialState: {
        history: [],
        query: "",
    },
    reducers: {
        searchProduct: (state, action) => {
            state.query = action.payload;
        },
        upsertQueryToHistory: (state, action) => {
            state.history = action.payload;
        },
    },
});

export const { searchProduct, upsertQueryToHistory } = searchSlice.actions;

export default searchSlice.reducer;

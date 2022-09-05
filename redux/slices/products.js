import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        list: [],
        loading: false,
        error: "",
    },
    reducers: {
        loadProducts: (state) => {
            state.loading = true;
        },
        getProductsSuccess: (state, action) => {
            state.list = action.payload;
            state.loading = false;
        },
        getProductsFailure: (state) => {
            state.loading = false;
        },
    },
});

export const { loadProducts, getProductsFailure, getProductsSuccess } =
    productsSlice.actions;
export default productsSlice.reducer;

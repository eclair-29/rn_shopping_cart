import { createSlice } from "@reduxjs/toolkit";

const updateProducts = (state, action) => {
    state.list = action.payload;
    state.loading = false;
};

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
        getProductsSuccess: updateProducts,
        getProductsByQuerySuccess: updateProducts,
        getProductsFailure: (state) => {
            state.loading = false;
        },
    },
});

export const {
    loadProducts,
    getProductsSuccess,
    getProductsByQuerySuccess,
    getProductsFailure,
} = productsSlice.actions;
export default productsSlice.reducer;

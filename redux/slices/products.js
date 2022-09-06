import { createSlice } from "@reduxjs/toolkit";

const updateProducts = (state, action) => {
    state.catalog = action.payload;
    state.loading = false;
};

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        catalog: [],
        loading: false,
        error: "",
        page: 1,
    },
    reducers: {
        loadProducts: (state) => {
            state.loading = true;
        },
        getProductsSuccess: updateProducts,
        getProductsFailure: (state) => {
            state.loading = false;
        },
    },
});

export const {
    loadProducts,
    loadSearchedProducts,
    getProductsSuccess,
    getProductsByQuerySuccess,
    getProductsFailure,
} = productsSlice.actions;
export default productsSlice.reducer;

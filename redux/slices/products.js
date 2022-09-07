import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        list: [],
        loading: true,
        error: "",
        endPage: false,
        page: 1,
    },
    reducers: {
        loadProducts: (state) => {
            state.loading = true;
        },
        loadEndPage: (state) => {
            state.endPage = true;
        },
        getNextPage: (state) => {
            state.page = state.page + 1;
        },
        getProductsSuccess: (state, action) => {
            state.list = [...state.list, ...action.payload];
            state.loading = false;
        },
        getProductsFailure: (state) => {
            state.loading = false;
        },
    },
});

export const {
    loadProducts,
    getProductsSuccess,
    getProductsFailure,
    getNextPage,
    loadEndPage,
} = productsSlice.actions;
export default productsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        list: [],
        loading: false,
        validation: "",
        isEndPage: false,
        page: 1,
    },
    reducers: {
        loadProducts: (state) => {
            state.loading = true;
        },
        cleanUpOldResult: (state) => {
            state.list = [];
            state.page = 1;
            state.isEndPage = false;
            state.validation = "";
        },
        getProductsSuccess: (state, action) => {
            state.list = action.payload;
            state.loading = false;
        },
        getProductsFailure: (state) => {
            state.loading = false;
        },
        loadMoreProducts: (state) => {
            state.page = state.page + 1;
            state.loading = true;
        },
        getMoreProductsSuccess: (state, action) => {
            state.list = action.payload;
            state.loading = false;
        },
        getMoreProductsFailure: (state) => {
            state.loading = false;
        },
        loadEndPage: (state) => {
            state.isEndPage = true;
        },
        getNoProductFound: (state, action) => {
            state.validation = action.payload;
        },
    },
});

export const {
    loadProducts,
    loadMoreProducts,
    getMoreProductsSuccess,
    getMoreProductsFailure,
    getProductsSuccess,
    getProductsFailure,
    loadEndPage,
    cleanUpOldResult,
    getNoProductFound,
} = productsSlice.actions;
export default productsSlice.reducer;

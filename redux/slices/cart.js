import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        list: [],
        loading: false,
        scannedId: "",
        validation: "",
    },
    reducers: {
        loadAddToCart: (state, action) => {
            state.loading = true;
            state.scannedId = action.payload;
        },
        addToCartSuccess: (state, action) => {
            state.list = action.payload;
            state.loading = false;
        },
        updateProductQtyOnCart: (state, action) => {
            state.list = action.payload;
            state.loading = false;
        },
        addToCartFailure: (state) => {
            state.loading = false;
        },
        loadTakeOutProductOnCart: (state, action) => {
            state.loading = true;
            state.scannedId = action.payload;
        },
        takeOutProductOnCartSuccess: (state, action) => {
            (state.list = action.payload), (state.loading = false);
        },
    },
});

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: [],
};

export const {
    loadAddToCart,
    addToCartSuccess,
    addToCartFailure,
    updateProductQtyOnCart,
    loadTakeOutProductOnCart,
    takeOutProductOnCartSuccess,
} = cartSlice.actions;

export default persistReducer(persistConfig, cartSlice.reducer);

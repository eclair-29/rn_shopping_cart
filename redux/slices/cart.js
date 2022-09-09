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
        qtyInput: 0,
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
        loadDeleteProductOnCart: (state, action) => {
            state.loading = true;
            state.scannedId = action.payload;
        },
        deleteProductOnCart: (state, action) => {
            state.list = action.payload;
            state.loading = false;
        },
        sendSuccessfulFeedBack: (state, action) => {
            state.validation = action.payload;
        },
        resetValidationFeedBack: (state) => {
            state.validation = "";
        },
        loadCartProductQtyIncrease: (state, action) => {
            state.loading = true;
            state.scannedId = action.payload;
        },
        loadCartProductQtyChange: (state, action) => {
            state.loading = true;
            state.qtyInput = action.payload.qtyInput;
            state.scannedId = action.payload.scannedId;
        },
        changeCartProductQty: (state, action) => {
            state.loading = false;
            state.list = action.payload;
        },
    },
});

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["list"],
};

export const {
    loadAddToCart,
    addToCartSuccess,
    addToCartFailure,
    updateProductQtyOnCart,
    loadDeleteProductOnCart,
    deleteProductOnCart,
    sendSuccessfulFeedBack,
    resetValidationFeedBack,
    loadCartProductQtyChange,
    changeCartProductQty,
} = cartSlice.actions;

export default persistReducer(persistConfig, cartSlice.reducer);

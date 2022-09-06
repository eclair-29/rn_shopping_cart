import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

export const searchSlice = createSlice({
    name: "search",
    initialState: {
        history: [],
        query: "",
    },
    reducers: {
        changeQueryValue: (state, action) => {
            state.query = action.payload;
        },
        upsertQueryToHistory: (state, action) => {
            state.history = action.payload;
        },
    },
});

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["history"],
};

export const { upsertQueryToHistory, changeQueryValue } = searchSlice.actions;

export default persistReducer(persistConfig, searchSlice.reducer);

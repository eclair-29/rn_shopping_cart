import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./slices/products";
import productsSaga from "./sagas/products";

const saga = createSagaMiddleware();

const store = configureStore({
    reducer: {
        products: productsReducer,
    },
    middleware: [saga],
});

saga.run(productsSaga);

export default store;

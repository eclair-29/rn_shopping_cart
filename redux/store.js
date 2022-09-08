import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import cartReducer from "./slices/cart";
import productsReducer from "./slices/products";
import searchReducer from "./slices/search";
import rootSaga from "./sagas";

const saga = createSagaMiddleware();

const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer,
        search: searchReducer,
    },
    middleware: [saga],
    devTools: true,
});

saga.run(rootSaga);

export const persistor = persistStore(store);
export default store;

import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import productsReducer from "./slices/products";
import searchReducer from "./slices/search";
import rootSaga from "./sagas";

const saga = createSagaMiddleware();

const store = configureStore({
    reducer: {
        products: productsReducer,
        search: searchReducer,
    },
    middleware: [saga],
});

saga.run(rootSaga);

export const persistor = persistStore(store);
export default store;

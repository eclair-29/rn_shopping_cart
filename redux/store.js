/* 
redux toolkit references
- modular approaches: hhttps://www.conf42.com/assets/slides/Conf42%20JS%202021%20Slides%20-%20Sergii%20Zhuravel.pdf
*/

import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/products";

const store = configureStore({
    reducer: {
        products: productsReducer,
    },
});

export default store;

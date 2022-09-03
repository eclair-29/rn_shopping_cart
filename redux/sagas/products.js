import { call, put, takeEvery } from "redux-saga/effects";
import { getProductsSuccess } from "../slices/products";

function* workLoadProducts() {
    const products = yield call(() =>
        fetch("http://192.168.1.6:3001/products")
    );
    const productsJson = yield products.json();
    const slicedproductsJson = productsJson.slice(0, 10);
    yield put(getProductsSuccess(slicedproductsJson));
}

function* productsSaga() {
    yield takeEvery("products/loadProducts", workLoadProducts);
}

export default productsSaga;

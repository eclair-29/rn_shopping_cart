import { call, put, takeEvery } from "redux-saga/effects";
import { getProductsByQuerySuccess } from "../slices/products";

function* workSearchProduct() {
    const products = yield call(
        () => fetch("http://192.168.1.6:3001/products") // update this
    );
    const productsJson = yield products.json();
    const slicedproductsJson = productsJson.slice(0, 10);
    yield put(getProductsByQuerySuccess(slicedproductsJson));
}

function* searchSaga() {
    yield takeEvery("search/searchProduct", workSearchProduct);
}

export default searchSaga;

import { call, put, takeEvery } from "redux-saga/effects";
import { getProductsSuccess } from "../slices/products";

function* workLoadProducts() {
    const query = yield select((state) => state.search.query);
    const page = yield select((state) => state.products.page);

    const products = yield call(() =>
        fetch(`http://192.168.1.6:3001/search/${query}?page=${page}&cap=8`)
    );
    const json = yield products.json();
    yield put(getProductsSuccess(json));
}

function* productsSaga() {
    yield takeEvery("products/loadProducts", workLoadProducts);
}

export default productsSaga;

import { call, put, takeEvery, select, delay } from "redux-saga/effects";
import { getProductsSuccess, loadEndPage } from "../slices/products";

function* workLoadProducts() {
    yield delay(2000);
    const query = yield select((state) => state.search.query);
    const page = yield select((state) => state.products.page);
    const cap = 8;

    const products = yield call(() =>
        fetch(
            `http://192.168.1.6:3001/search/${query}?page=${page.toString()}&cap=${cap}`
        )
    );
    const json = yield products.json();
    const productCount = json.length;

    cap > productCount && (yield put(loadEndPage()));

    yield put(getProductsSuccess(json));
}

function* productsSaga() {
    yield takeEvery("products/loadProducts", workLoadProducts);
}

export default productsSaga;

import {
    call,
    put,
    takeEvery,
    select,
    delay,
    throttle,
} from "redux-saga/effects";
import {
    getProductsSuccess,
    loadEndPage,
    cleanUpOldResult,
    getMoreProductsSuccess,
    getNoProductFound,
} from "../slices/products";
import { getPageState, getProductsState } from "../selectors/products";
import { getQueryState } from "../selectors/search";

const api = "http://192.168.1.7:3001/search";
const cap = 10;

function* cleanUpOldResultSaga() {
    yield put(cleanUpOldResult());
}

function* getProductsSaga() {
    const query = yield select(getQueryState);
    const page = yield select(getPageState);

    const products = yield call(() =>
        fetch(`${api}/${query}?page=${page.toString()}&cap=${cap}`)
    );
    const json = yield products.json();

    json.length === 0 && (yield put(getNoProductFound("No product found")));

    yield put(getProductsSuccess(json));
}

function* getMoreProductsSaga() {
    const query = yield select(getQueryState);
    const page = yield select(getPageState);
    const currentlyLoadedList = yield select(getProductsState); // page * 20

    const products = yield call(() =>
        fetch(`${api}/${query}?page=${page.toString()}&cap=${cap}`)
    );
    const json = yield products.json();
    const productCount = json.length; // 20

    cap > productCount && (yield put(loadEndPage()));

    yield put(getMoreProductsSuccess([...currentlyLoadedList, ...json]));
}

function* productsSaga() {
    yield takeEvery("products/loadProducts", cleanUpOldResultSaga);
    yield takeEvery("products/cleanUpOldResult", getProductsSaga);
    yield throttle(50, "products/loadMoreProducts", getMoreProductsSaga);
}

export default productsSaga;

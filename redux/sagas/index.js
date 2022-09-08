import { all, fork } from "redux-saga/effects";
import productsSaga from "./products";
import cartSaga from "./cart";

function* rootSaga() {
    yield all([fork(productsSaga), fork(cartSaga)]);
}

export default rootSaga;

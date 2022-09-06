import { all, fork } from "redux-saga/effects";
import productsSaga from "./products";

function* rootSaga() {
    yield all([fork(productsSaga)]);
}

export default rootSaga;

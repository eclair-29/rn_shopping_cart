import { all, fork } from "redux-saga/effects";
import productsSaga from "./products";
import searchSaga from "./search";

function* rootSaga() {
    yield all([fork(searchSaga), fork(productsSaga)]);
}

export default rootSaga;

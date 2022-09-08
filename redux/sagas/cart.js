import _ from "lodash";
import {
    call,
    put,
    takeEvery,
    select,
    delay,
    throttle,
} from "redux-saga/effects";
import {
    getCartList,
    getExistingProductOnCart,
    getScannedIdState,
} from "../selectors/cart";
import { addToCartSuccess, updateProductQtyOnCart } from "../slices/cart";

const api = "http://192.168.1.7:3001/products";

function* addToCartSaga() {
    const scannedId = yield select(getScannedIdState);
    const cartList = yield select(getCartList);

    const isProductExists = yield select(getExistingProductOnCart);

    console.log("is product already on cart? ", isProductExists);

    const fetchedProductInfo = yield call(() =>
        fetch(`${api}/${scannedId.toString()}`)
    );
    const productInfo = yield fetchedProductInfo.json();

    // gets the existing product info on cart and increase its qty
    // ideally, this should be done via api or db
    const updatedExistingProductQtyOnCart = _.map(
        cartList,
        (product) =>
            product.id === scannedId && { ...product, qty: product.qty + 1 }
    );

    const addedNewProductOnCart = [...cartList, { ...productInfo, qty: 1 }];

    !isProductExists
        ? yield put(addToCartSuccess(addedNewProductOnCart))
        : yield put(updateProductQtyOnCart(updatedExistingProductQtyOnCart));
}

function* cartSaga() {
    yield throttle(100, "cart/loadAddToCart", addToCartSaga);
}

export default cartSaga;

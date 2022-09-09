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
    getAllProductsOnCartExcept,
    getCartListState,
    getExistingProductOnCart,
    getQtyInputState,
    getScannedIdState,
} from "../selectors/cart";
import {
    addToCartSuccess,
    sendSuccessfulFeedBack,
    updateProductQtyOnCart,
    deleteProductOnCart,
    increaseCartProductQty,
    changeCartProductQty,
} from "../slices/cart";

const api = "https://rn-shopping-cart-server.herokuapp.com/products";

function* addToCartSaga() {
    const scannedId = yield select(getScannedIdState);
    const cartList = yield select(getCartListState);

    const isProductExists = yield select(getExistingProductOnCart);

    console.log("is product already on cart? ", isProductExists);

    const fetchedProductInfo = yield call(() =>
        fetch(`${api}/${scannedId.toString()}`)
    );
    const productInfo = yield fetchedProductInfo.json();

    // gets the existing product info on cart and increase its qty
    // ideally, this should be done via api or db
    const updatedExistingProductQtyOnCart = _.map(cartList, (product) =>
        product.id === scannedId
            ? { ...product, qty: product.qty + 1 }
            : product
    );

    const addedNewProductOnCart = [...cartList, { ...productInfo, qty: 1 }];

    !isProductExists
        ? yield put(addToCartSuccess(addedNewProductOnCart))
        : yield put(updateProductQtyOnCart(updatedExistingProductQtyOnCart));

    yield put(
        sendSuccessfulFeedBack(
            `${productInfo.display_name} was successfully added to cart`
        )
    );
}

function* deleteProductOnCartSaga() {
    const updatedCartProducts = yield select(getAllProductsOnCartExcept);
    yield put(deleteProductOnCart(updatedCartProducts));
}

function* changeCartProductQtySaga() {
    const qtyInput = yield select(getQtyInputState);
    const scannedId = yield select(getScannedIdState);
    const cartList = yield select(getCartListState);

    const updatedCartProductQty = _.map(cartList, (product) =>
        product.id === scannedId ? { ...product, qty: qtyInput } : product
    );

    yield put(changeCartProductQty(updatedCartProductQty));
}

function* cartSaga() {
    yield throttle(100, "cart/loadAddToCart", addToCartSaga);
    yield takeEvery("cart/loadDeleteProductOnCart", deleteProductOnCartSaga);
    yield throttle(
        100,
        "cart/loadCartProductQtyChange",
        changeCartProductQtySaga
    );
}

export default cartSaga;

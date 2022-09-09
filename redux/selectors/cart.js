import _ from "lodash";

const getScannedIdState = (state) => state.cart.scannedId;
const getCartListState = (state) => state.cart.list;
const getCartValidationState = (state) => state.cart.validation;
const getCartLoadingState = (state) => state.cart.loading;
const getQtyInputState = (state) => state.cart.qtyInput;

const getExistingProductOnCart = (state) => {
    const { scannedId, list } = state.cart;

    const existingProductInfo = _.find(
        list,
        (product) => product.id === scannedId
    );

    return existingProductInfo;
};

const getTotalPriceOnCart = (state) => {
    const { list } = state.cart;
    const allProductPrice = _.map(
        list,
        (product) => parseFloat(product.price) * product.qty
    );
    console.log(allProductPrice);
    const totalPrice = _.sum(allProductPrice);

    return _.round(totalPrice, 2);
};

const getAllProductsOnCartExcept = (state) => {
    const { list, scannedId } = state.cart;
    const filteredProducts = _.filter(
        list,
        (product) => product.id !== scannedId
    );

    return filteredProducts;
};

export {
    getScannedIdState,
    getCartListState,
    getExistingProductOnCart,
    getTotalPriceOnCart,
    getCartValidationState,
    getCartLoadingState,
    getAllProductsOnCartExcept,
    getQtyInputState,
};

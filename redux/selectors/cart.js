import _ from "lodash";

const getScannedIdState = (state) => state.cart.scannedId;
const getCartList = (state) => state.cart.list;

const getExistingProductOnCart = (state) => {
    const { scannedId, list } = state.cart;
    console.log("cart list on selector: ", list);
    const existingProductInfo = _.find(
        list,
        (product) => product.id === scannedId
    );

    return existingProductInfo;
};

export { getScannedIdState, getCartList, getExistingProductOnCart };

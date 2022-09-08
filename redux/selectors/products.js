import _ from "lodash";

const getProductsState = (state) => state.products.list;
const getPageState = (state) => state.products.page;
const getIsEndPageState = (state) => state.products.isEndPage;
const getLoadingState = (state) => state.products.loading;
const getValidationState = (state) => state.products.validation;

const getProductInfo = (products, id) =>
    _.find(products, (product) => product.id === id);

export {
    getValidationState,
    getLoadingState,
    getPageState,
    getIsEndPageState,
    getProductsState,
    getProductInfo,
};

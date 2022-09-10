import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadProducts, loadMoreProducts } from "../redux/slices/products";
import {
    getLoadingState,
    getProductsState,
    getPageState,
    getIsEndPageState,
    getValidationState,
} from "../redux/selectors/products";
import CartFab from "../components/CartFab";
import ProductGridList from "../components/ProductGridList";
import SearchField from "../components/SearchField";
import { loadAddToCart, resetValidationFeedBack } from "../redux/slices/cart";
import {
    getCartLoadingState,
    getCartValidationState,
} from "../redux/selectors/cart";
import { Snackbar } from "react-native-paper";
import globalStyles from "../globals/styles";
import ValidationBar from "../components/ValidationBar";

const Result = ({ navigation }) => {
    const products = useSelector(getProductsState);
    const loading = useSelector(getLoadingState);
    const page = useSelector(getPageState);
    const isEndPage = useSelector(getIsEndPageState);
    const validation = useSelector(getValidationState);

    // cart state selectors
    const cartValidation = useSelector(getCartValidationState);
    const cartLoading = useSelector(getCartLoadingState);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadProducts());
    }, [dispatch]);

    const _handleLoadMore = () => {
        !isEndPage && dispatch(loadMoreProducts());
    };

    const _handleAddToCart = (productId) => {
        dispatch(loadAddToCart(productId));
    };

    const _handleCarResetValidation = () => {
        dispatch(resetValidationFeedBack());
    };

    return (
        <>
            <SearchField navigation={navigation} />
            <ProductGridList
                products={products}
                col={2}
                _handleLoadMore={_handleLoadMore}
                loading={loading}
                validation={validation}
                page={page}
                _handleAddToCart={_handleAddToCart}
                cartLoading={cartLoading}
            />
            <CartFab navigation={navigation} cartValidation={cartValidation} />
            {cartValidation && (
                <ValidationBar
                    cartValidation={cartValidation}
                    _handleOnClose={_handleCarResetValidation}
                />
            )}
        </>
    );
};

export default Result;

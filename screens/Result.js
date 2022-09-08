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
import { loadAddToCart } from "../redux/slices/cart";

const Result = ({ navigation }) => {
    const products = useSelector(getProductsState);
    const loading = useSelector(getLoadingState);
    const page = useSelector(getPageState);
    const isEndPage = useSelector(getIsEndPageState);
    const validation = useSelector(getValidationState);

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
            />
            <CartFab navigation={navigation} />
        </>
    );
};

export default Result;

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadProducts, getNextPage } from "../redux/slices/products";
import CartFab from "../components/CartFab";
import ProductGridList from "../components/ProductGridList";
import SkeletonGridList from "../components/SkeletonGridList";
import SearchField from "../components/SearchField";

const Result = ({ navigation }) => {
    const products = useSelector((state) => state.products.list);
    const loading = useSelector((state) => state.products.loading);
    const page = useSelector((state) => state.products.page);
    const endPage = useSelector((state) => state.products.endPage);

    const dispatch = useDispatch();

    const skeletonListPlaceholder = new Array(8);

    useEffect(() => {
        dispatch(loadProducts());
    }, [/* dispatch */ page]);

    const _handleLoadMore = () => {
        !endPage && dispatch(getNextPage());
        console.log("page: ", page);
    };

    return (
        <>
            <SearchField navigation={navigation} />
            {loading && (
                <SkeletonGridList
                    skeletonPlaceholders={[...skeletonListPlaceholder.keys()]}
                    col={2}
                />
            )}
            {products && (
                <ProductGridList
                    products={products}
                    col={2}
                    _handleLoadMore={_handleLoadMore}
                />
            )}
            <CartFab navigation={navigation} />
        </>
    );
};

export default Result;

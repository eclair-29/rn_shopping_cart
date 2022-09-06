import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadProducts } from "../redux/slices/products";
import CartFab from "../components/CartFab";
import ProductGridList from "../components/ProductGridList";
import SkeletonGridList from "../components/SkeletonGridList";
import SearchField from "../components/SearchField";

const Result = ({ navigation }) => {
    const products = useSelector((state) => state.products.catalog);
    const loading = useSelector((state) => state.products.loading);

    const dispatch = useDispatch();

    const skeletonFiller = new Array(8);

    useEffect(() => {
        dispatch(loadProducts());
    }, [dispatch]);

    return (
        <>
            <SearchField navigation={navigation} />
            {loading ? (
                <SkeletonGridList
                    skeletonFiller={[...skeletonFiller.keys()]}
                    col={2}
                />
            ) : (
                <ProductGridList products={products} col={2} />
            )}
            <CartFab navigation={navigation} />
        </>
    );
};

export default Result;

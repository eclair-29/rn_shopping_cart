import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadProducts } from "../redux/slices/products";
import CartFab from "../components/CartFab";
import ProductGridList from "../components/ProductGridList";

const Result = ({ navigation }) => {
    const products = useSelector((state) => state.products.list);
    const loading = useSelector((state) => state.products.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadProducts());
    }, [dispatch]);

    console.log(products);
    console.log(loading);

    return (
        <>
            <ProductGridList products={products} loading={loading} col={2} />
            <CartFab navigation={navigation} />
        </>
    );
};

export default Result;

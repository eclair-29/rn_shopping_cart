import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Surface, Text } from "react-native-paper";

import globalStyles from "../globals/styles";
import { loadProducts } from "../redux/slices/products";

const Result = ({ navigation }) => {
    const _handleBackNavigation = () => {
        navigation.goBack();
    };

    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadProducts());
        console.log(products);
    }, [dispatch]);

    return (
        <Surface style={globalStyles.container}>
            <Text style={globalStyles.text}>Result Screen</Text>
            <Button
                mode="outlined"
                labelStyle={globalStyles.button}
                onPress={_handleBackNavigation}
            >
                Home
            </Button>
        </Surface>
    );
};

export default Result;

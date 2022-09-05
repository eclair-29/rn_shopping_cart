import { FAB } from "react-native-paper";

import globalStyles from "../globals/styles";

const CartFab = ({ navigation }) => {
    const _handleCartNavigation = () => {
        navigation.navigate("Cart");
    };

    return (
        <FAB
            style={globalStyles.fab}
            icon="shopping-cart"
            onPress={_handleCartNavigation}
        />
    );
};

export default CartFab;

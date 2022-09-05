import { Surface, Text, Button } from "react-native-paper";
import CartFab from "../components/CartFab";
import globalStyles from "../globals/styles";

const Search = ({ navigation }) => {
    const _handleNavigation = () => {
        navigation.navigate("Cart");
    };

    return (
        <Surface style={globalStyles.container}>
            <Text style={globalStyles.text}>Search Screen</Text>
            <Button
                mode="outlined"
                labelStyle={globalStyles.button}
                onPress={_handleNavigation}
            >
                Cart
            </Button>
            <CartFab navigation={navigation} />
        </Surface>
    );
};

export default Search;

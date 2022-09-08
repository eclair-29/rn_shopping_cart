import { Surface, Text, Button } from "react-native-paper";
import CartFab from "../components/CartFab";
import SearchField from "../components/SearchField";
import globalStyles from "../globals/styles";

const Search = ({ navigation }) => {
    const _handleNavigation = () => {
        navigation.navigate("Cart");
    };

    return (
        <>
            <SearchField navigation={navigation} />
            <Surface style={globalStyles.container}></Surface>
        </>
    );
};

export default Search;

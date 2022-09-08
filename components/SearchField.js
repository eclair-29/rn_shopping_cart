import { useSelector, useDispatch } from "react-redux";
import { useNavigationState } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { Colors, Surface, TextInput } from "react-native-paper";
import { changeQueryValue } from "../redux/slices/search";
import { loadProducts } from "../redux/slices/products";
import { getQueryState } from "../redux/selectors/search";

const textInputLeftNode = <TextInput.Icon icon="search" size={20} />;

const textInputRightNode = <TextInput.Icon disabled icon="mic" size={20} />;

const SearchField = ({ navigation }) => {
    const query = useSelector(getQueryState);
    const dispatch = useDispatch();

    const currentScreen = useNavigationState(
        (state) => state.routes[state.index].name
    );

    const _handleSearch = (value) => {
        currentScreen !== "Result"
            ? navigation.navigate("Result")
            : dispatch(loadProducts());
    };

    const _handleQueryChange = (value) => {
        dispatch(changeQueryValue(value));
    };

    return (
        <Surface style={searchFieldStyles.container}>
            <TextInput
                placeholder="Search"
                clearButtonMode="always"
                mode="outlined"
                autoCapitalize="none"
                dense
                value={query}
                onChangeText={(text) => _handleQueryChange(text)}
                onSubmitEditing={(text) => _handleSearch(text)}
                left={textInputLeftNode}
                right={textInputRightNode}
            />
        </Surface>
    );
};

const searchFieldStyles = StyleSheet.create({
    container: {
        height: 80,
        justifyContent: "center",
        paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderColor: Colors.grey400,
    },
});

export default SearchField;

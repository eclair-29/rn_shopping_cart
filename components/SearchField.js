import { useSelector, useDispatch } from "react-redux";
import { StyleSheet } from "react-native";
import { Colors, Surface, TextInput } from "react-native-paper";
import { changeQueryValue } from "../redux/slices/search";

const TextInputLeftNode = <TextInput.Icon icon="search" size={20} />;

const TextInputRightNode = <TextInput.Icon icon="mic" size={20} />;

const SearchField = ({ navigation }) => {
    const query = useSelector((state) => state.search.query);
    const dispatch = useDispatch();

    const _handleSearch = (value) => {
        navigation.navigate("Result");
    };

    const _handleQueryChange = (value) => {
        dispatch(changeQueryValue(value));
    };

    console.log(query);

    return (
        <Surface style={searchFieldStyles.container}>
            <TextInput
                placeholder="Search"
                clearButtonMode="always"
                mode="outlined"
                dense
                value={query}
                onChangeText={(text) => _handleQueryChange(text)}
                onSubmitEditing={(text) => _handleSearch(text)}
                left={TextInputLeftNode}
                right={TextInputRightNode}
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

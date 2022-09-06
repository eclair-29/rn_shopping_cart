import { StyleSheet, Image } from "react-native";
import { Colors, IconButton, Surface, TextInput } from "react-native-paper";

const TextInputLeftNode = <TextInput.Icon icon="search" size={20} />;

const TextInputRightNode = <TextInput.Icon icon="mic" size={20} />;

const SearchField = () => {
    const _handleSearch = (queryInput) => {};

    return (
        <Surface style={searchFieldStyles.container}>
            <TextInput
                placeholder="Search"
                clearButtonMode="always"
                mode="outlined"
                style={searchFieldStyles.searchInput}
                dense
                onSubmitEditing={(text) => _handleSearch(text)}
                // value="Search"
                left={TextInputLeftNode}
                right={TextInputRightNode}
            />
        </Surface>
    );
};

const searchFieldStyles = StyleSheet.create({
    container: {
        // flex: 1,
        height: 80,
        justifyContent: "center",
        paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderColor: Colors.grey400,
    },
    searchInput: {
        // height: 45,
        // paddingVertical: 5,
    },
});

export default SearchField;

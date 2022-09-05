import { IconButton, Colors } from "react-native-paper";

const SearchHeaderRight = ({ navigation }) => {
    return (
        <>
            <IconButton icon="camera" disabled />
        </>
    );
};

const searchHeaderOptions = ({ navigation }) => ({
    headerRight: () => <SearchHeaderRight navigation={navigation} />,
    title: "",
});

export default searchHeaderOptions;

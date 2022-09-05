import { IconButton, Colors } from "react-native-paper";

const ResultHeaderRight = ({ navigation }) => {
    return (
        <>
            <IconButton icon="filter" />
        </>
    );
};

const resultHeaderOptions = ({ navigation }) => ({
    headerRight: () => <ResultHeaderRight navigation={navigation} />,
    title: "",
});

export default resultHeaderOptions;

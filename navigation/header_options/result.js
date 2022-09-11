import { IconButton, Colors } from "react-native-paper";

const ResultHeaderRight = ({ navigation }) => {
    const _handleCartNavigation = () => navigation.navigate("Cart");
    return (
        <>
            <IconButton
                onPress={_handleCartNavigation}
                icon="shopping-cart"
                color={Colors.white}
            />
        </>
    );
};

const resultHeaderOptions = ({ navigation }) => ({
    headerRight: () => <ResultHeaderRight navigation={navigation} />,
    title: "",
});

export default resultHeaderOptions;

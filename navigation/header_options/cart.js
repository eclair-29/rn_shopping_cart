import { Colors, IconButton } from "react-native-paper";
import ScanIcon from "../../assets/scan.svg";

const scanIcon = () => <ScanIcon width={30} height={30} fill={Colors.white} />;

const CartHeaderRight = ({ navigation }) => {
    const _handleSearchNavigation = () => {
        navigation.navigate("Search");
    };

    return (
        <>
            <IconButton
                icon="search"
                onPress={_handleSearchNavigation}
                color={Colors.white}
            />
            <IconButton disabled color={Colors.white} icon={scanIcon} />
        </>
    );
};

const cartheaderOptions = ({ navigation }) => ({
    headerRight: () => <CartHeaderRight navigation={navigation} />,
});

export default cartheaderOptions;

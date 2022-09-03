import { Button, Surface, Text } from "react-native-paper";
import globalStyles from "../globals/styles";

const Home = ({ navigation }) => {
    const _handleNavigation = () => {
        navigation.navigate("Result");
    };

    return (
        <Surface style={globalStyles.container}>
            <Text style={globalStyles.text}>Home Screen</Text>
            <Button
                mode="outlined"
                labelStyle={globalStyles.button}
                onPress={_handleNavigation}
            >
                Results
            </Button>
        </Surface>
    );
};

export default Home;

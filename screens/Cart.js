import { Surface, Text } from "react-native-paper";
import globalStyles from "../globals/styles";

const Cart = ({ navigation }) => {
    return (
        <Surface style={globalStyles.container}>
            <Text style={globalStyles.text}>Cart Screen</Text>
        </Surface>
    );
};

export default Cart;

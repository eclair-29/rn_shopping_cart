import Feather from "react-native-vector-icons/Feather";
import { StatusBar } from "react-native";
import { Provider as StoreProvider } from "react-redux";
import { Colors, Provider as PaperProvider } from "react-native-paper";
import {
    Poppins_400Regular as poppins_400,
    Poppins_500Medium as poppins_500,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";

import store from "./redux/store";
import theme from "./globals/theme";
import Navigator from "./navigation/Navigator";

export default function App() {
    const [fontLoaded, fontError] = useFonts({
        poppins_400,
        poppins_500,
    });

    const icon = (props) => <Feather {...props} />;

    return (
        fontLoaded && (
            <StoreProvider store={store}>
                <PaperProvider settings={{ icon }} theme={theme}>
                    <StatusBar
                        backgroundColor={Colors.teal700}
                        barStyle="light-content"
                    />
                    <Navigator />
                </PaperProvider>
            </StoreProvider>
        )
    );
}

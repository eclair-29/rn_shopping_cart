import { Provider as StoreProvider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import {
    Poppins_400Regular,
    Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";

import store from "./redux/store";
import theme from "./globals/theme";
import Navigator from "./navigation/Navigator";

export default function App() {
    const [fontLoaded, fontError] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
    });

    return (
        fontLoaded && (
            <StoreProvider store={store}>
                <PaperProvider theme={theme}>
                    <Navigator />
                </PaperProvider>
            </StoreProvider>
        )
    );
}

import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Surface, Text } from "react-native-paper";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
    return (
        <Provider store={store}>
            <Surface style={styles.container}>
                <StatusBar style="auto" />
            </Surface>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

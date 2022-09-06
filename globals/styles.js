import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontFamily: "poppins_400",
    },
    button: {
        fontFamily: "poppins_500",
    },
    header: {
        fontSize: 16,
        fontFamily: "poppins_500",
        textTransform: "uppercase",
    },
    fab: {
        position: "absolute",
        margin: 16,
        right: 0,
        bottom: 0,
    },
    gridContainer: {
        flex: 1,
        padding: 10,
    },
});

export default globalStyles;

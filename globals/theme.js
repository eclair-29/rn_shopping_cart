import { Colors, DefaultTheme } from "react-native-paper";

const theme = {
    ...DefaultTheme,
    roundness: 1,
    version: 3,
    colors: {
        ...DefaultTheme.colors,
        primary: Colors.teal700,
        accent: Colors.cyan500,
        surface: Colors.white,
    },
};

export default theme;

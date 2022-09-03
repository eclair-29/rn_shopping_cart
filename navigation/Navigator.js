import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import globalStyles from "../globals/styles";
import Home from "../screens/Home";
import Result from "../screens/Result";

const Stack = createNativeStackNavigator();

const sharedNavigationOptions = {
    headerTitleStyle: globalStyles.header,
};

const AppStack = () => {
    return (
        <Stack.Navigator screenOptions={sharedNavigationOptions}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Result" component={Result} />
        </Stack.Navigator>
    );
};

const Navigator = () => {
    return (
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>
    );
};

export default Navigator;

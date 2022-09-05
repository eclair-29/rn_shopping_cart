import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import globalStyles from "../globals/styles";
import Cart from "../screens/Cart";
import Search from "../screens/Search";
import Result from "../screens/Result";
import cartheaderOptions from "./header_options/cart";
import resultHeaderOptions from "./header_options/result";
import searchHeaderOptions from "./header_options/search";

const Stack = createNativeStackNavigator();

const sharedNavigationOptions = {
    headerTitleStyle: globalStyles.header,
};

const AppStack = () => {
    return (
        <Stack.Navigator screenOptions={sharedNavigationOptions}>
            <Stack.Screen
                name="Cart"
                component={Cart}
                options={cartheaderOptions}
            />
            <Stack.Screen
                name="Result"
                component={Result}
                options={resultHeaderOptions}
            />
            <Stack.Screen
                name="Search"
                component={Search}
                options={searchHeaderOptions}
            />
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

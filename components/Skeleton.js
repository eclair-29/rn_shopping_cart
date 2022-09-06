import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
import { Dimensions, StyleSheet, Animated, Easing } from "react-native";
import { Surface, Colors } from "react-native-paper";

const { width } = Dimensions.get("window");

const AniLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const Skeleton = ({ layoutStyles }) => {
    const aniValue = new Animated.Value(0);

    useEffect(() => {
        Animated.loop(
            Animated.timing(aniValue, {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear.inOUT,
                useNativeDriver: true,
            })
        ).start();
    }, []);

    const translateX = aniValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-width, width],
    });

    return (
        <Surface style={{ ...skeletonStyles.container, ...layoutStyles }}>
            <AniLinearGradient
                colors={skeletonStyles.gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                    ...skeletonStyles.transition,
                    transform: [{ translateX }],
                }}
            />
        </Surface>
    );
};

const skeletonStyles = StyleSheet.create({
    container: {
        backgroundColor: Colors.grey400,
        borderWidth: 1,
        borderColor: Colors.grey400,
        overflow: "hidden",
    },
    gradient: ["transparent", Colors.grey300, Colors.grey300, "transparent"],
    transition: {
        ...StyleSheet.absoluteFill,
    },
});

export default Skeleton;

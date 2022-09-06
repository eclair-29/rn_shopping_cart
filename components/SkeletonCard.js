import { StyleSheet } from "react-native";
import { Colors, Surface } from "react-native-paper";
import Skeleton from "./Skeleton";

const SkeletonCard = ({
    coverHeight,
    titleHeight,
    subtitleHeight,
    actionHeight,
}) => {
    return (
        <Surface style={skeletonCardStyles.container}>
            <Skeleton
                layoutStyles={{
                    ...skeletonCardStyles.cover,
                    height: coverHeight,
                }}
            />
            <Surface style={skeletonCardStyles.content}>
                <Skeleton
                    layoutStyles={{
                        ...skeletonCardStyles.title,
                        height: titleHeight,
                    }}
                />

                <Skeleton
                    layoutStyles={{
                        ...skeletonCardStyles.subtitle,
                        height: subtitleHeight,
                    }}
                />
                <Skeleton
                    layoutStyles={{
                        ...skeletonCardStyles.action,
                        height: actionHeight,
                    }}
                />
            </Surface>
        </Surface>
    );
};

const skeletonCardStyles = StyleSheet.create({
    container: {
        margin: 5,
        flex: 1,
    },
    content: {
        justifyContent: "center",
        alignItems: "flex-start",
        // marginHorizontal: 15,
        marginTop: 0,
        padding: 15,
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: Colors.grey400,
    },
    cover: {
        // marginHorizontal: 15,
        marginBottom: 0,
    },
    title: {
        borderRadius: 150 / 2,
        width: "100%",
        marginVertical: 5,
    },
    subtitle: {
        width: "40%",
        borderRadius: 150 / 2,
    },
    action: {
        marginTop: 80,
        width: "50%",
        borderRadius: 150 / 2,
    },
});

export default SkeletonCard;

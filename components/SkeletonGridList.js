import { Headline, Surface } from "react-native-paper";
import { FlatList, StyleSheet, Dimensions } from "react-native";
import globalStyles from "../globals/styles";
import SkeletonCard from "./SkeletonCard";

const coverHeight = Dimensions.get("window").width / 2;

const GridListHeader = ({ header }) =>
    header && (
        <Surface style={gridListStyle.headerContainer}>
            <Headline style={gridListStyle.header}>{header}</Headline>
        </Surface>
    );

const SkeletonGridList = ({ skeletonFiller, col, header }) => (
    <FlatList
        data={skeletonFiller}
        renderItem={() => (
            <SkeletonCard
                coverHeight={coverHeight}
                titleHeight={15}
                subtitleHeight={15}
                actionHeight={15}
            />
        )}
        keyExtractor={(product, index) => index.toString()}
        numColumns={col}
        style={globalStyles.gridContainer}
        ListHeaderComponent={<GridListHeader header={header} />}
    />
);

const gridListStyle = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 5,
        backgroundColor: "transparent",
    },
    header: {
        ...globalStyles.header,
        fontSize: 12,
    },
});

export default SkeletonGridList;

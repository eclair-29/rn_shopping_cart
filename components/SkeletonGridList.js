import { FlatList, Dimensions } from "react-native";
import globalStyles from "../globals/styles";
import SkeletonCard from "./SkeletonCard";
import GridListFooter from "./GridListFooter";

const coverHeight = Dimensions.get("window").width / 2;

const SkeletonGridList = ({ skeletonFiller, col }) => (
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
        ListFooterComponent={<GridListFooter />}
    />
);

export default SkeletonGridList;

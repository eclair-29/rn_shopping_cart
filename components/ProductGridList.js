import { Headline, Surface } from "react-native-paper";
import { FlatList, StyleSheet } from "react-native";
import globalStyles from "../globals/styles";
import ProductCard from "./ProductCard";

const GridListHeader = ({ header }) =>
    header && (
        <Surface style={gridListStyle.headerContainer}>
            <Headline style={gridListStyle.header}>{header}</Headline>
        </Surface>
    );

const ProductGridList = ({ products, col, header }) => (
    <FlatList
        data={products}
        renderItem={(product) => (
            <ProductCard
                product={product.item}
                titleFontSize={12}
                priceFontSize={14}
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

export default ProductGridList;

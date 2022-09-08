import { FlatList, StyleSheet, View } from "react-native";
import { ActivityIndicator, Colors, Headline } from "react-native-paper";
import globalStyles from "../globals/styles";
import ProductCard from "./ProductCard";

const GridListFooter = ({ loading, page }) =>
    loading && (
        <View>
            <ActivityIndicator
                style={gridListStyles.loader}
                animating={true}
                color={Colors.cyan500}
            />
        </View>
    );

const GridListEmpty = ({ validation }) =>
    validation && (
        <View style={gridListStyles.empty}>
            <Headline style={gridListStyles.headline}>{validation}</Headline>
        </View>
    );

const ProductGridList = ({
    products,
    col,
    _handleLoadMore,
    loading,
    validation,
    _handleAddToCart,
}) => {
    return (
        <FlatList
            data={products}
            renderItem={(product) => (
                <ProductCard
                    product={product.item}
                    titleFontSize={12}
                    priceFontSize={14}
                    _handleAddToCart={_handleAddToCart}
                />
            )}
            keyExtractor={(product, index) => index.toString()}
            numColumns={col}
            style={gridListStyles.list}
            onEndReached={_handleLoadMore}
            contentContainerStyle={gridListStyles.container}
            ListFooterComponent={<GridListFooter loading={loading} />}
            ListEmptyComponent={<GridListEmpty validation={validation} />}
        />
    );
};

const gridListStyles = StyleSheet.create({
    container: {
        padding: 10,
    },
    list: {
        flex: 1,
    },
    loader: {
        paddingVertical: 10,
    },
    empty: {
        alignItems: "center",
        justifyContent: "center",
    },
    headline: {
        ...globalStyles.header,
        color: Colors.grey600,
    },
});

export default ProductGridList;

import { FlatList } from "react-native";
import GridListFooter from "./GridListFooter";
import globalStyles from "../globals/styles";
import ProductCard from "./ProductCard";

const ProductGridList = ({ products, col, header, _handleLoadMore }) => {
    return (
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
            ListFooterComponent={<GridListFooter />}
            onEndReached={_handleLoadMore}
        />
    );
};

export default ProductGridList;

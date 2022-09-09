import { PureComponent } from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import { Card, Colors, Button, Text, Title } from "react-native-paper";
import ValidationBar from "./ValidationBar";

class ProductCard extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { product, _handleAddToCart, titleFontSize, priceFontSize } =
            this.props;

        return (
            <View style={productCardStyles.container}>
                <Card style={productCardStyles.card}>
                    <Card.Cover
                        resizeMode="contain"
                        style={productCardStyles.cover}
                        source={{
                            uri: product.photo,
                        }}
                    />
                    <Card.Content>
                        <Title
                            numberOfLines={2}
                            style={{
                                ...productCardStyles.title,
                                fontSize: titleFontSize,
                            }}
                        >
                            {product.display_name}
                        </Title>
                        <Text
                            style={{
                                ...productCardStyles.price,
                                fontSize: priceFontSize,
                            }}
                        >
                            ₱ {product.price}
                        </Text>
                    </Card.Content>
                    <Card.Actions>
                        <Button
                            onPress={() => _handleAddToCart(product.id)}
                            labelStyle={productCardStyles.action}
                        >
                            Add to Cart
                        </Button>
                    </Card.Actions>
                </Card>
            </View>
        );
    }
}

const productCardStyles = StyleSheet.create({
    container: {
        flex: 1 / 2,
    },
    card: {
        elevation: 0,
        borderWidth: 1,
        margin: 5,
    },
    cover: {
        height: Dimensions.get("window").width / 2,
    },
    title: {
        paddingTop: 5,
        fontFamily: "poppins_500",
        lineHeight: 20,
    },
    price: {
        fontFamily: "poppins_500",
        color: Colors.deepOrange700,
    },
    action: {
        fontFamily: "poppins_500",
        fontSize: 12,
    },
});

export default ProductCard;

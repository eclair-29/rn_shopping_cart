import { StyleSheet, Dimensions } from "react-native";
import { Card, Colors, Button, Text, Title } from "react-native-paper";

const ProductCard = ({ product, titleFontSize, priceFontSize }) => {
    return (
        <Card style={productCardStyles.container}>
            <Card.Cover
                resizeMode="contain"
                style={productCardStyles.cover}
                source={{
                    uri: "https://static-01.daraz.com.np/p/714bc2b3846e187f62055b38f8192f57.jpg",
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
                <Button labelStyle={productCardStyles.action}>
                    Add to Cart
                </Button>
            </Card.Actions>
        </Card>
    );
};

const productCardStyles = StyleSheet.create({
    container: {
        elevation: 0,
        borderWidth: 1,
        margin: 5,
        flex: 1,
    },
    cover: {
        height: Dimensions.get("window").width / 2,
    },
    title: {
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

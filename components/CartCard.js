import CounterInput from "react-native-numeric-input";
import { PureComponent } from "react";
import { Image, StyleSheet, View } from "react-native";
import {
    Avatar,
    Button,
    Card,
    Colors,
    IconButton,
    Text,
} from "react-native-paper";

class CartCard extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            product,
            _handleCartProductDelete,
            _handleCartProductQtyChange,
        } = this.props;

        const ProductControls = ({ qty, productId }) => (
            <>
                <CounterInput
                    totalWidth={100}
                    onChange={(value) =>
                        _handleCartProductQtyChange(productId, value)
                    }
                    value={qty}
                    inputStyle={cartCardStyles.qtyControllerInput}
                    editable={false}
                />
                <IconButton
                    icon="x-circle"
                    color={Colors.red500}
                    onPress={() => _handleCartProductDelete(productId)}
                />
            </>
        );

        const ProductPhoto = ({ photo }) => (
            <View>
                <Image
                    source={{ uri: photo }}
                    style={cartCardStyles.productPhoto}
                    resizeMode="contain"
                />
            </View>
        );

        return (
            <Card style={cartCardStyles.container}>
                <Card.Title
                    title={product.display_name}
                    subtitle={`₱ ${product.price}`}
                    titleNumberOfLines={2}
                    titleStyle={cartCardStyles.title}
                    subtitleStyle={cartCardStyles.price}
                    left={() => <ProductPhoto photo={product.photo} />}
                />
                <Card.Content style={cartCardStyles.cardControlsContainer}>
                    <ProductControls
                        qty={product.qty}
                        productId={product.id}
                        _handleCartProductQtyChange={
                            _handleCartProductQtyChange
                        }
                    />
                </Card.Content>
            </Card>
        );
    }
}

const cartCardStyles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
    title: {
        fontFamily: "poppins_500",
        fontSize: 14,
        lineHeight: 20,
        paddingLeft: 30,
    },
    price: {
        fontFamily: "poppins_500",
        fontSize: 16,
        color: Colors.deepOrange700,
        paddingTop: 8,
        paddingLeft: 30,
    },
    qtyControllerInput: {
        borderLeftWidth: 0,
        borderRightWidth: 0,
    },
    cardControlsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
    },
    productPhoto: {
        width: 70,
        height: 70,
    },
});

export default CartCard;

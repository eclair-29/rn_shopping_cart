import { FlatList, StyleSheet, View } from "react-native";
import { Button, Colors, Surface, Text, Title } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "../components/CartCard";
import globalStyles from "../globals/styles";
import { getCartListState, getTotalPriceOnCart } from "../redux/selectors/cart";
import {
    loadCartProductQtyChange,
    loadDeleteProductOnCart,
} from "../redux/slices/cart";

const Cart = ({ navigation }) => {
    const cartList = useSelector(getCartListState);
    const totalPrice = useSelector(getTotalPriceOnCart);
    const totalCartProducts = cartList.length;

    const dispatch = useDispatch();

    console.log("cart list: ", cartList);

    const _handleCartProductDelete = (productId) => {
        dispatch(loadDeleteProductOnCart(productId));
    };

    const _handleCartProductQtyChange = (productId, qtyInput) => {
        dispatch(loadCartProductQtyChange({ scannedId: productId, qtyInput }));
    };

    const NoProductOnCart = () => (
        <View style={globalStyles.container}>
            <Text style={globalStyles.text}>
                You have no product added to your cart
            </Text>
        </View>
    );

    const CartHeader = () => (
        <Surface style={cartStyle.header}>
            <Title style={cartStyle.headerTitle}>
                {totalCartProducts} Products on Cart
            </Title>
        </Surface>
    );

    const CartFooter = () => (
        <Surface style={cartStyle.footer}>
            <Title style={cartStyle.footerTitle}>₱ {totalPrice}</Title>
            <Button mode="outlined" disabled labelStyle={globalStyles.button}>
                Check Out
            </Button>
        </Surface>
    );

    return (
        <>
            <CartHeader />
            {totalCartProducts === 0 ? (
                <NoProductOnCart />
            ) : (
                <FlatList
                    data={cartList}
                    renderItem={(product) => (
                        <CartCard
                            product={product.item}
                            _handleCartProductQtyChange={
                                _handleCartProductQtyChange
                            }
                            _handleCartProductDelete={_handleCartProductDelete}
                        />
                    )}
                    keyExtractor={(product, index) => index.toString()}
                />
            )}
            <CartFooter />
        </>
    );
};

const cartStyle = StyleSheet.create({
    header: {
        padding: 15,
        backgroundColor: Colors.white,
        elevation: 4,
    },
    headerTitle: {
        fontFamily: "poppins_500",
        fontSize: 14,
    },

    footer: {
        padding: 15,
        backgroundColor: Colors.white,
        elevation: 4,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    footerTitle: {
        fontFamily: "poppins_500",
        fontSize: 16,
        color: Colors.deepOrange700,
        paddingTop: 5,
    },
});

export default Cart;

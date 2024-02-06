import {Image, Pressable, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import productImg from "../assets/images/4090.jpg";
import deleteIcon from "../assets/images/trash.png";

export default function CartCard(props) {

    function handleDeletePress() {
        const filteredList = props.cartItems.filter((item) => item.id !== props.id);
        props.setCartItems(filteredList);
    }

    return (
        <View style={styles.container}>
            <Image source={productImg} alt={props.productTitle} style={styles.productImg}/>
            <View style={styles.main}>
                <View style={styles.description}>
                    <Text style={styles.productTitle}>{props.productTitle}</Text>
                    <Text style={styles.price}>${props.price}</Text>
                </View>
                <View style={styles.deleteIconContainer}>
                    <Pressable onPress={handleDeletePress}>
                        <Image source={deleteIcon} style={styles.deleteIcon}/>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexDirection: "row",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "gray"
    },
    main: {
        flex: 1,
        flexDirection: "row"
    },
    productImg: {
        width: 110,
        height: 110,
    },
    description: {
        paddingLeft: 16,
        flex: 4,
    },
    deleteIcon: {
        width: 40,
        height: 40,
    },
    productTitle: {
        fontFamily: "Roboto",
        fontSize: 24,
        marginBottom: 10
    },
    price: {
        fontFamily: "RobotoMedium",
        fontSize: 30
    },
    deleteIconContainer: {
        justifyContent: "center",
        flex: 1,
    }
})

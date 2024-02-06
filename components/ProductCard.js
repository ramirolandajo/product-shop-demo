import {Image, Pressable, StyleSheet, Text, View} from 'react-native'
import React, {useState} from 'react';
import productImg from '../assets/images/4090.jpg'
import addIcon from '../assets/images/plus.png'
import checkIcon from '../assets/images/check.png'

export default function ProductCard(props) {
    const [productAdded, setProductAdded] = useState(false)
    const addProductToCart = (product) => {
        const newProduct = {
            id: new Date().getTime(),
            name: product.productTitle,
            price: product.price
        }
        props.setCartItems([...props.cart, newProduct])
    }

    const handleAddPress = () => {
        const product = {
            productTitle: props.productTitle,
            price: props.price
        }
        addProductToCart(product)
        setProductAdded(true)
    }

    return (
        <View style={styles.container}>
            <Image source={productImg} alt={props.productTitle} style={styles.productImg}/>
            <View style={styles.main}>
                <View style={styles.description}>
                    <Text style={styles.productTitle}>{props.productTitle}</Text>
                    <Text style={styles.price}>${props.price}</Text>
                </View>
                <View style={styles.addIconContainer}>
                    <Pressable onPress={handleAddPress}>
                        {
                            (productAdded) ?
                                <Image source={checkIcon} style={styles.checkIcon}/>
                                :
                                <Image source={addIcon} style={styles.addIcon}/>
                        }
                    </Pressable>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "#FFF",
        elevation: 10,
        flexDirection: "row",
        borderRadius: 16,
        marginHorizontal: 16,
        marginTop: 16
    },
    main: {
        flex: 1,
        flexDirection: "row"
    },
    productImg: {
        width: 130,
        height: 130,
    },
    description: {
        paddingLeft: 16,
        flex: 4,
    },
    addIcon: {
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
    addIconContainer: {
        justifyContent: "center",
        flex: 1,
    },
    checkIcon: {
        width: 40,
        height: 40,
        resizeMode: "contain"
    }
})


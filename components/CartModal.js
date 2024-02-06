import {FlatList, Image, Modal, Pressable, StyleSheet, View} from 'react-native'
import React, {useState} from 'react'
import cartLogo from "../assets/images/shopping_cart.png";
import Separator from "./Separator";
import CartTitle from "./CartTitle";
import CartCard from "./CartCard";

export default function CartModal({
    cart,
    setCartItems
}) {
    const [modalVisible, setModalVisible] = useState(false);

    const handleModalClose = () => {
        setModalVisible(false)
    }

    return (
        <View style={{justifyContent: "center"}}>
            <Pressable onPress={() => setModalVisible(true)}>
                <Image source={cartLogo} style={styles.cartLogo}/>
            </Pressable>
            <Modal
                animationType={"fade"}
                visible={modalVisible}
                onRequestClose={handleModalClose}
            >
                <View style={styles.modalBackground}>
                    <CartTitle setModalState={setModalVisible}/>
                    <Separator/>
                    <FlatList
                        data={cart}
                        renderItem={({item}) => (<CartCard
                                id={item.id}
                                productTitle={item.name}
                                price={item.price}
                                cartItems={cart}
                                setCartItems={setCartItems}/>)}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    modalBackground: {
        height: "100%",
    }, cartLogo: {
        width: 40, height: 40,
    }
})

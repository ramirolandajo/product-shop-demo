import {Image, Pressable, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import closeButton from '../assets/images/close.png'

export default function CartTitle(props) {

    return (
        <View style={styles.modalHeader}>
            <View style={{flexDirection: "row"}}>
                <Text style={[styles.title, styles.turquoise]}>Y</Text>
                <Text style={[styles.title, styles.blue]}>o</Text>
                <Text style={[styles.title, styles.red]}>u</Text>
                <Text style={[styles.title, styles.yellow]}>r</Text>
            </View>
            <View style={{flexDirection: "row"}}>
                <Text style={[styles.title, styles.gray]}>C</Text>
                <Text style={[styles.title, styles.turquoise]}>a</Text>
                <Text style={[styles.title, styles.yellow]}>r</Text>
                <Text style={[styles.title, styles.blue]}>t</Text>
            </View>
            <Pressable onPress={() => props.setModalState(false)}>
                <Image source={closeButton} style={styles.closeButton}/>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    modalHeader: {
        justifyContent: "space-evenly",
        alignItems: "flex-end",
        flexDirection: "row",
    },
    title: {
        fontFamily: "Josefin",
        fontSize: 50,
        letterSpacing: 3,
    },
    closeButton: {
        width: 40,
        height: 40,
        marginBottom: 10,
        marginLeft: 20
    },
    turquoise: {
        color: "#177E89"
    },
    blue: {
        color: "#084C61"
    },
    red: {
        color: "#DB3A34"
    },
    yellow: {
        color: "#FFC857"
    },
    gray: {
        color: "#323031"
    }
})

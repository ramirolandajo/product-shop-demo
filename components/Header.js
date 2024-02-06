import {View, Text, StyleSheet} from 'react-native'
import React from 'react'

export default function Header() {
    const colors = [
        "#177E89",
        "#084C61",
        "#DB3A34",
        "#FFC857",
        "#323031"
    ]

    return (
        <View style={styles.header}>
            <Text style={[styles.title, styles.turquoise]}>S</Text>
            <Text style={[styles.title, styles.blue]}>h</Text>
            <Text style={[styles.title, styles.red]}>o</Text>
            <Text style={[styles.title, styles.yellow]}>p</Text>
            <Text style={[styles.title, styles.gray]}>+</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    title: {
        fontFamily: "Josefin",
        fontSize: 50,
        letterSpacing: 5,
    },
    turquoise : {
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
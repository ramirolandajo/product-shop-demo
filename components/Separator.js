import {StyleSheet, View} from 'react-native'
import React from 'react'

export default function Separator() {
    return (
        <View style={styles.container}>
            <View style={[styles.line, styles.blue]}></View>
            <View style={[styles.circle, styles.yellow]}></View>
            <View style={[styles.line, styles.red]}></View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 40,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    line: {
        width: "35%",
        height: 10,
        borderRadius: 20,
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 100,
    },
    turquoise : {
        backgroundColor: "#177E89"
    },
    blue: {
        backgroundColor: "#084C61"
    },
    red: {
        backgroundColor: "#DB3A34"
    },
    yellow: {
        backgroundColor: "#FFC857"
    },
    gray: {
        backgroundColor: "#323031"
    }
})

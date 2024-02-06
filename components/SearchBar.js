import {StyleSheet, TextInput} from 'react-native'
import React, {useEffect, useState} from 'react'

export default function SearchBar({
    mainData,
    productCardData,
    setProductCardData
}) {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (value) => {
        setInputValue(value)
    }

    useEffect(() => {
        if (inputValue.length === 0) {
            setProductCardData(mainData)
        }
        else {
            const filteredArray = productCardData.filter((item) => item.productTitle.toLowerCase().match(inputValue.toLowerCase()));
            setProductCardData(filteredArray)
        }
    }, [inputValue]);

    return (
        <TextInput
            style={styles.searchInput}
            placeholder={"Search"}
            placeholderTextColor={"#484547"}
            value={inputValue}
            onChangeText={handleInputChange}
        />
    )
}

const styles = StyleSheet.create({
    searchInput: {
        margin: 16,
        borderColor: "#484547",
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        fontSize: 20,
        fontFamily: "RobotoMedium",
        width: "76%"
    }
})

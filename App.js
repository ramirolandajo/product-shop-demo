import {FlatList, StyleSheet, View} from 'react-native';
import {useFonts} from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import React, {useCallback, useState} from 'react';
import {StatusBar} from "expo-status-bar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProductCard from "./components/ProductCard";
import Constants from "expo-constants";
import CartModal from "./components/CartModal";

SplashScreen.preventAutoHideAsync();

export default function App() {

    const data = [
        {
            id: 1,
            productTitle: "Product 1",
            price: "400"
        },
        {
            id: 2,
            productTitle: "4090Ti",
            price: "5400"
        },
        {
            id: 3,
            productTitle: "Product 3",
            price: "200"
        },
        {
            id: 4,
            productTitle: "Product 4",
            price: "900"
        },
        {
            id: 5,
            productTitle: "Product 5",
            price: "400"
        },
        {
            id: 6,
            productTitle: "Product 6",
            price: "100"
        },
        {
            id: 7,
            productTitle: "Product 7",
            price: "800"
        },
        {
            id: 8,
            productTitle: "Product 8",
            price: "700"
        },
        {
            id: 9,
            productTitle: "Product 9",
            price: "900"
        },
        {
            id: 10,
            productTitle: "Product 10",
            price: "4000"
        },
        {
            id: 11,
            productTitle: "Product 11",
            price: "4100"
        },
        {
            id: 12,
            productTitle: "Product 12",
            price: "4020"
        },
        {
            id: 13,
            productTitle: "Product 13",
            price: "4300"
        },
        {
            id: 14,
            productTitle: "Product 14",
            price: "600"
        },
        {
            id: 15,
            productTitle: "Product 15",
            price: "500"
        },
        {
            id: 16,
            productTitle: "Product 16",
            price: "300"
        },
        {
            id: 17,
            productTitle: "Product 17",
            price: "4100"
        },
        {
            id: 18,
            productTitle: "Product 18",
            price: "700"
        },
        {
            id: 19,
            productTitle: "Product 19",
            price: "800"
        },
        {
            id: 20,
            productTitle: "Product 20",
            price: "20000"
        }
    ];

    const [productCardData, setProductCardData] = useState(data);
    const [cartItems, setCartItems] = useState([]);

    const [fontsLoaded, fontError] = useFonts({
        "Quicksand": require('./assets/fonts/Quicksand/static/Quicksand-Regular.ttf'),
        "QuicksandLight": require('./assets/fonts/Quicksand/static/Quicksand-Light.ttf'),
        "QuicksandMedium": require('./assets/fonts/Quicksand/static/Quicksand-Medium.ttf'),
        "QuicksandSemiBold": require('./assets/fonts/Quicksand/static/Quicksand-SemiBold.ttf'),
        "Monoton": require('./assets/fonts/Monoton/Monoton-Regular.ttf'),
        "Josefin": require('./assets/fonts/Josefin_Sans/static/JosefinSans-Bold.ttf'),
        "Roboto": require('./assets//fonts/Roboto-Regular.ttf'),
        "RobotoMedium": require('./assets//fonts/Roboto-Medium.ttf')
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }


    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <Header/>
            <View style={{flexDirection: "row"}}>
                <SearchBar
                    productCardData={productCardData}
                    mainData={data}
                    setProductCardData={setProductCardData}/>
                <CartModal cart={cartItems} setCartItems={setCartItems}/>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={productCardData}
                renderItem={({item}) => (
                    <ProductCard
                        productTitle={item.productTitle}
                        price={item.price}
                        setCartItems={setCartItems}
                        cart={cartItems}/>
                )}
                keyExtractor={(item) => item.id}
            />
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        paddingTop: Constants.statusBarHeight
    }
});

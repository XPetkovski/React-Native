import React from 'react';
import {View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>RED JACKET FOR SALE</AppText>
                <AppText style={styles.subTitle}>100$</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require("../assets/ryan.jpg")}
                        title="Hristijan"
                        subTitle="4 Listings"
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20
    },
    image: {
        width: "100%",
        height: 300,
        resizeMode: "center"
    },
    subTitle:{
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10
    },
    title: {
        fontSize: 24,
        fontWeight: "500"
    },
    userContainer: {
        marginVertical: 40
    }
})

export default ListingDetailsScreen;
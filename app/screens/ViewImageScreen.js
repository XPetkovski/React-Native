import React from 'react';
import {Image, StyleSheet, View} from "react-native";
import colors from "../config/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";
function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" color="white" size={50}/>
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="delete" color="white" size={50} />
            </View>
            <Image
                resizeMode="contain"
                style={styles.image}
                source={require('../assets/chair.jpg')} />
        </View>

    );
}

const styles = StyleSheet.create({
    closeIcon: {
        // width: 50,
        // height: 50,
        // backgroundColor: colors.primary,
        margin: 10,
        position: "absolute",
        top: 40,
        left: 30
    },
    container: {
        backgroundColor: colors.black,
        flex: 1
    },
    deleteIcon: {
        // width: 50,
        // height: 50,
        // backgroundColor: colors.secondary,
        margin: 10,
        position: "absolute",
        top: 40,
        right: 30
    },
    image: {
        width: "100%",
        height: "100%"
    }
})

export default ViewImageScreen;
import React from 'react';
import {ImageBackground, StyleSheet, View, Image, Text} from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
    return (
        <ImageBackground
            blurRadius={5}
            style={styles.background}
            source={require("../assets/background.jpg")} >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/logo.png")} />
                <Text style={styles.tagLine}>Sell what you don't need</Text>
            </View>
            {/*<View style={styles.loginButton}></View>*/}
            <View style={styles.buttonsContainer}>
                <AppButton title='login' color="primary"/>
                <AppButton title='register' color="secondary" />
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    buttonsContainer: {
        padding: 20,
        width: "100%"
    },
    // loginButton: {
    //     width: "100%",
    //     height: 70,
    //     backgroundColor: "#1c88ee",
    // },
    // registerButton: {
    //     width: "100%",
    //     height: 70,
    //     backgroundColor: "#ea242a",
    // },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100,
        // backgroundColor: "transparent",
    },
    tagLine: {
        color: "white",
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 10
    }
});

export default WelcomeScreen;
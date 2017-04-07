import React, { Component } from "react";
import { View, StyleSheet, TextStyle, ViewStyle, Platform } from "react-native";

import HelloWorld from "./components/HelloWorld";
import WelcomeAndroid from "./components/Welcome.android";
import WelcomeIos from "./components/Welcome.ios";

interface Props {}
interface State {}

export default class App extends Component<Props, State> {
    render() {
        return (
            <View style={styles.container}>
                {
                    Platform.OS === 'ios' ? 
                        <WelcomeIos style={ styles.instructions} /> :
                        <WelcomeAndroid style={ styles.instructions} />
                }
                
                <HelloWorld style={styles.helloworld} max={10} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    } as ViewStyle,

    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    } as TextStyle,

    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5,
    } as TextStyle,

    helloworld: {
        marginVertical: 15,
    } as ViewStyle,
});

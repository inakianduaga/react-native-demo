import React, { Component } from "react";
import { View, Text, TextStyle } from "react-native";

type Props = {
    style: TextStyle
}
type State = {}

export default class Welcome extends Component<Props, State> {
    render() {
        return (
            <View>
                <Text style={this.props.style}>
                    Android is awesome! IOS sucks! 
                </Text>
                <Text style={this.props.style}>
                    Press Cmd+R to reload, {"\n"}
                    Cmd+D or shake for dev menu
                </Text>
            </View>
        );
    }
}

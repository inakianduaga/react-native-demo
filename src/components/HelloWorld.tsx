import React, { Component } from "react";
import { View, Text, Button, ViewStyle } from "react-native";

interface Props {
    max: number;
    message?: string | number;
    alert?: string | number;
    style: ViewStyle;
}

interface State {
    counter: number;
}

export default class HelloWorld extends Component<Props, State> {
    static defaultProps = {
        message: "Press here",
        alert: "You clicked too much! Resetting counter...",
    };

    state = {
        counter: 0,
    };

    onPress = () => {
        const counter = this.state.counter + 1;
        if (counter < this.props.max) {
            return this.setState({ counter });
        }
        // Alert after re-rendering
        return this.setState({ counter: 0 }, () => alert(this.props.alert));
    }

    render() {
        const { message } = this.props;
        const { counter } = this.state;

        return (
            <View style={this.props.style}>
                <Button title="Button Here" color="red" onPress={this.onPress}>
                    {message} ({counter})
                </Button>
                <View style={{ alignItems: "center"}}>
                    <Text>
                        Clicks: { this.state.counter }
                    </Text>
                </View>
            </View>
        );
    }
}

import React, { Component } from "react";
import { View, Text, Button, ViewStyle } from "react-native";
import { Dispatch } from 'redux'
import { navigateTo } from '../actions/listings'

interface Props {
    max: number;
    style: ViewStyle;
    dispatch: Dispatch<any>
}

interface State {
    counter: number;
}

export default class HelloWorld extends Component<Props, State> {

    private message = 'Press here';
    private alert = 'You clicked too much! Resetting counter...';

    state = {
        counter: 0,
    };

    onPress = () => {
        const counter = this.state.counter + 1;
        if (counter < this.props.max) {
            return this.setState({ counter });
        }
        // Alert after re-rendering
        return this.setState({ counter: 0 }, () => alert(this.alert));
    }

    navigateToListings = () => this.props.dispatch(navigateTo('listings'))

    render() {

        const { counter } = this.state;

        return (
            <View style={this.props.style}>
                <Button title="Button Here" color="red" onPress={this.onPress}>
                    {this.message} ({counter})
                </Button>
                <View style={{ alignItems: "center"}}>
                    <Text>
                        Clicks: { this.state.counter }
                    </Text>
                </View>

                <View style={{ backgroundColor: '#0dbd0d', marginTop: '10%', padding: '1%', width: "100%", }}>
                    <Button title="Go to Listings &raquo;" color="white" onPress={this.navigateToListings}>
                        {this.message} ({counter})
                    </Button>
                </View>

            </View>
        );
    }
}

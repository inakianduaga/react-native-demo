import React, { Component } from "react";
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { View, StyleSheet, TextStyle, ViewStyle, Platform, Text } from "react-native";

import HelloWorld from "../components/HelloWorld";
import Listings from '../components/Listings'
import WelcomeAndroid from "../components/Welcome.android";
import WelcomeIos from "../components/Welcome.ios";
import { IStateRecord, IState } from '../reducers/main'

interface Props extends IState {
  dispatch: Dispatch<any>,
}

const Intro = () =>
  <View style={styles.container}>
    {
      /* Platform specific component example */
      Platform.OS === 'ios' ?
        <WelcomeIos style={styles.instructions} /> :
        <WelcomeAndroid style={styles.instructions} />
    }
    <HelloWorld style={styles.helloworld} max={10} />
  </View>

const Detail = () => <View><Text>TODO</Text></View>

const assertNever = (x: never): never => {
    throw new Error("Unexpected navigation value: " + x);
}

class Main extends Component<Props, {}> {
  render() {
    switch (this.props.navigation) {
      case 'intro':
        return <Intro />
      case 'listings':
        return <Listings { ...this.props } />
      case 'detail':
        return <Detail />
      default:
        return assertNever(this.props.navigation); // Exhaustive pattern matching
    }
  } 
}

// Hook up component to the redux store
export default connect(
  // (state: IStateRecord) => state.toJS(), // Non-performant, better manually`
  (state: IStateRecord) => ({ 
    movies: state.get('movies'), 
    currentPage: state.get('currentPage'), 
    fetching: state.get('fetching'), 
    navigation: state.get('navigation')
  }),
  dispatch => ({ dispatch })
)(Main);

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

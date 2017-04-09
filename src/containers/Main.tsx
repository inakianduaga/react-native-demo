import React, { Component } from "react";
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { View, StyleSheet, TextStyle, ViewStyle, Platform, Text } from "react-native";

import HelloWorld from "../components/HelloWorld";
import Listings from '../components/Listings'
import WelcomeAndroid from "../components/Welcome.android";
import WelcomeIos from "../components/Welcome.ios";
import { IState as IMainState } from '../reducers/main'
import { IStateRecord as IRootState } from '../reducers/root'

interface IMainProps extends IMainState {
  dispatch: Dispatch<any>,
}

const Intro = ({ dispatch } : { dispatch: Dispatch<any> }) =>
  <View style={styles.container}>
    {
      /* Platform specific component example */
      Platform.OS === 'ios' ?
        <WelcomeIos style={styles.instructions} /> :
        <WelcomeAndroid style={styles.instructions} />
    }
    <HelloWorld style={styles.helloworld} max={10} dispatch={dispatch} />
  </View>

const Detail = () => <View><Text>TODO</Text></View>

const assertNever = (x: never): never => {
    throw new Error("Unexpected navigation value: " + x);
}

class Main extends Component<IMainProps, {}> {
  render() {
    switch (this.props.navigation) {
      case 'intro':
        return <Intro  dispatch={this.props.dispatch} />
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
  (state: IRootState) => ({ 
    movies: state.getIn(['main', 'movies']), 
    currentPage: state.getIn(['main', 'currentPage']), 
    fetching: state.getIn(['main', 'fetching']), 
    navigation: state.getIn(['main', 'navigation'])
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

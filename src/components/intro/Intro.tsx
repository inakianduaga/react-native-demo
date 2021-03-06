import React from "react";
import { View, Button, Platform, StyleSheet, TextStyle, ViewStyle, Text } from "react-native";
import { Dispatch } from 'redux'
import WelcomeAndroid from "./Welcome.android";
import WelcomeIos from "./Welcome.ios";
import { navigateTo } from '../../actions/navigation'

interface IProps {
  dispatch: Dispatch<any>
}

const Intro = ({ dispatch }: IProps) => {
  const navigateToListings = () => dispatch(navigateTo('listings'))
  return (
    <View style={ styles.container} >
      <Text style={{ fontSize: 26, marginBottom: '8%' }}>
        React Native Demo
      </Text>

      {
        /* Platform specific component example */
        Platform.OS === 'ios' ?
          <WelcomeIos style={styles.instructions} /> :
          <WelcomeAndroid style={styles.instructions} />
      }
      <View style={ styles.button }>
        <Button title="Go to Movies &raquo;" color={Platform.OS === 'ios' ? 'white': '#0dbd0d' } onPress={navigateToListings} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  } as ViewStyle,
  button: Object.assign({
    marginTop: '10%', padding: '1%', width: "100%",
  }, 
    Platform.OS === 'ios' ? {
      backgroundColor: '#0dbd0d'
    } : {}
  ),
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

export default Intro;
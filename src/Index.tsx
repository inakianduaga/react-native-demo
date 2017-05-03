import React, { Component } from "react";
import { Platform } from 'react-native'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
import Main from "./containers/App";
import codePush from "react-native-code-push";

type IProps = {}
type IState = {}

const store = configureStore();

class App extends Component<IProps, IState> {
  render() {
    return (
      <Provider store={ store }>
        <Main />
      </Provider>
    );
  }
}

// TODO: Unwrap once we have implemented codepush for iOS backend
let WrappedApp;
if(Platform.OS === 'android') {
  WrappedApp = codePush({
    checkFrequency: codePush.CheckFrequency.MANUAL, 
    installMode: codePush.InstallMode.ON_NEXT_RESUME 
  })(App);
} 

// For Android, we deploy CodePush wrap, iOS standard (until implemented)
export default Platform.OS === 'ios' ? App : WrappedApp;
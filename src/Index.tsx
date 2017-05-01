import React, { Component } from "react";
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
import Main from "./containers/App";
import codePush from "react-native-code-push";

type IProps = {}
type IState = {}

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME, 
  installMode: codePush.InstallMode.ON_NEXT_RESUME 
}

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

const WrappedApp = codePush(codePushOptions)(App);

export default WrappedApp;
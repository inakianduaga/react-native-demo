import React, { Component } from "react";
import { Provider } from 'react-redux';
import configureStore from '../reducers/configureStore'
import Main from "./Main";

type IProps = {}
type IState = {}

export default class App extends Component<IProps, IState> {
  render() {
    return (
      <Provider store={configureStore()}>
        <Main />
      </Provider>
    );
  }
}

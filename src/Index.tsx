import React, { Component } from "react";
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
import Main from "./containers/App";

type IProps = {}
type IState = {}

const store = configureStore();

export default class App extends Component<IProps, IState> {
  render() {
    return (
      <Provider store={ store }>
        <Main />
      </Provider>
    );
  }
}

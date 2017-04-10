import React, { Component } from "react";
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { View, Text } from "react-native";

import Intro from "../components/intro/Intro";
import Listings from '../components/listings/Listings'
import { IState as IListingsState } from '../reducers/listings'
import { IStateRecord as IRootState } from '../reducers/index'

interface IMainProps extends IListingsState {
  dispatch: Dispatch<any>,
}

const assertNever = (x: never): never => {
    throw new Error("Unexpected navigation value: " + x);
}

class Main extends Component<IMainProps, {}> {
  render() {
    switch (this.props.navigation) {
      case 'intro':
        return <Intro dispatch={this.props.dispatch} />
      case 'listings':
        return <Listings { ...this.props } />
      case 'detail':
        return <View><Text>TODO</Text></View>
      default:
        return assertNever(this.props.navigation); // Exhaustive pattern matching
    }
  } 
}

// Hook up component to the redux store
export default connect(
  // (state: IStateRecord) => state.toJS(), // Non-performant, better manually`
  (state: IRootState) => ({ 
    movies: state.getIn(['listings', 'movies']),
    totalResults: state.getIn(['listings', 'totalResults']), 
    currentPage: state.getIn(['listings', 'currentPage']), 
    fetching: state.getIn(['listings', 'fetching']), 
    searchTerm: state.getIn(['listings', 'searchTerm']),
    navigation: state.getIn(['navigation', 'navigation']),
  }),
  dispatch => ({ dispatch })
)(Main);


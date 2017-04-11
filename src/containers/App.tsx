import React, { Component } from "react";
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import Intro from "../components/intro/Intro";
import Listings from '../components/listings/Listings'
import Details from '../components/details/Details'

import { IState as IListingsState } from '../reducers/listings'
import { IState as IDetailsState } from '../reducers/details'
import { IStateRecord as IRootState } from '../reducers/index'

interface IMainProps {
  dispatch: Dispatch<any>,
  listings: IListingsState,
  details: IDetailsState,
}

const assertNever = (x: never): never => {
  throw new Error("Unexpected navigation value: " + x);
}

class Main extends Component<IMainProps, {}> {
  
  render() {
    switch (this.props.listings.navigation) {
      case 'intro':
        return <Intro dispatch={this.props.dispatch} />
      case 'listings':
        return <Listings { ...this.props.listings } dispatch={this.props.dispatch} />
      case 'detail':
        return <Details {...this.props.details } dispatch ={this.props.dispatch} />
      default:
        return assertNever(this.props.listings.navigation); // Exhaustive pattern matching
    }
  } 
}

// Hook up component to the redux store
export default connect(
  // (state: IStateRecord) => state.toJS(), // Non-performant, better manually`
  (state: IRootState) => ({ 
    listings: {
      movies: state.getIn(['listings', 'movies']),
      totalResults: state.getIn(['listings', 'totalResults']), 
      currentPage: state.getIn(['listings', 'currentPage']), 
      fetching: state.getIn(['listings', 'fetching']), 
      searchTerm: state.getIn(['listings', 'searchTerm']),
      navigation: state.getIn(['navigation', 'navigation']),
    },
    details: {
      imbdId: state.getIn(['details', 'imbdId']),
      title: state.getIn(['details', 'title']),
      year: state.getIn(['details', 'year']),
      released: state.getIn(['details', 'released']),
      actors: state.getIn(['details', 'actors']),
      genre: state.getIn(['details', 'genre']),
      plot: state.getIn(['details', 'plot']),
      poster: state.getIn(['details', 'poster']),      
    }
  }),
  dispatch => ({ dispatch })
)(Main);
import React from "react";
import { View, Text, Button, ScrollView, Image, Platform } from "react-native";
import { Dispatch } from 'redux'
const { Column: Col, Row } = require('react-native-flexbox-grid')

import { IState as IListingsState} from '../../reducers/listings'
import { navigateTo, goToDetailsPage } from '../../actions/navigation'
import { selectPage as selectPageAction } from '../../actions/listings'
import SearchBox from './SearchBox'
import Pagination from './Pagination'

interface IProps extends IListingsState {
  dispatch: Dispatch<any>,
}

const Listings = (props: IProps) => {

  const navigateToIntro = () => props.dispatch(navigateTo('intro'))
  const selectPage = (page: number) => props.currentPage !== page && props.dispatch(selectPageAction(page))
  const navigateToDetails = (id: string) => props.dispatch(goToDetailsPage(id))

  return (
    <View style={{ 
      flex: 1,
      flexDirection: 'column',
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: "#F5FCFF",
      paddingTop: '8%',
    }}>

      <SearchBox dispatch={props.dispatch} searchTerm={props.searchTerm} loading={props.fetching} />

      <View style={{ marginTop: 10 }}>
        <Pagination currentPage={ props.currentPage} onPress={ selectPage } results={props.totalResults} />
      </View>

      {/* List */}
      { props.totalResults > 0 && 
        <View style={{ height: '70%', marginTop: 20 }}>
          <ScrollView>
            <Row style={{ alignItems: 'center'}}>
            {
              props.movies.map(
                (movie, index) => 
                  <Col 
                    key={ `${movie.get('imdbID')}${index}` } 
                    xs={6} 
                    sm={6} 
                    md={4} 
                    lg={2} 
                    style={{ maxHeight: 190, alignItems: 'center', marginVertical: 10}}
                    >
                    <Image 
                      resizeMode="contain"
                      style={{ height: 150, width: 150 }}
                      source={{ uri: movie.get('poster').length > 0 && movie.get('poster') !== 'N/A' ? movie.get('poster'): 'http://placehold.it/300x350'}}
                    />
                    <Text 
                      onPress = {() => navigateToDetails(movie.get('imdbID'))} 
                      ellipsizeMode="tail" 
                      numberOfLines={1} 
                      style={{ textAlign:'center', color: '#008cba', fontSize: 16, marginTop: 3, maxWidth: 150 }}
                      > { movie.get('title') }
                    </Text>
                  </Col>
              )
            }
            </Row>
          </ScrollView>
        </View>         
      }

      {/* No results found case */}
      { props.totalResults === 0 && 
        (props.searchTerm && props.searchTerm.length > 0) && 
        !props.fetching ? 
        <Text style={{ marginVertical : 10, fontSize: 16, color: 'red'}}>No results...</Text> : 
        null
      }

      <View style={{ backgroundColor: Platform.OS === 'ios' ? '#222' : undefined, marginTop: '10%', padding: '1%', width: "100%" }}>
          <Button title="&laquo; Back to Intro" color={ Platform.OS === 'ios' ? 'white': '#222' } onPress={navigateToIntro} />
      </View>

    </View>
  )
}

export default Listings;

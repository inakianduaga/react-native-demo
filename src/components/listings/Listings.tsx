import React from "react";
import { View, Text, Button, ScrollView, Image } from "react-native";
import { Dispatch } from 'redux'

import { IState as IListingsState} from '../../reducers/listings'
import { navigateTo } from '../../actions/navigation'
import SearchBox from './SearchBox'
import Pagination from './Pagination'

interface IListingProps extends IListingsState {
  dispatch: Dispatch<any>,
}

const Listings = (props: IListingProps) => {

  const navigateToIntro = () => props.dispatch(navigateTo('intro'))
  const selectPage = (page: number) => {
    console.log(page)
  }

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

      <Pagination currentPage={ props.currentPage} onPagePress={ selectPage } results={props.totalResults || 0} />

      <Text style={{ fontSize: 20, marginTop:'5%', marginBottom: '5%'}}>
        PAGINATION HERE (Total: { props.totalResults })
      </Text>

      {/* List */}
      { props.totalResults > 0 && 
        <View style={{ maxHeight: '50%'}}>
          <ScrollView>
            {
              props.movies.map(
                movie => 

                  <View key={ movie.get('imdbID') } style={{ flexDirection: 'column', alignItems: 'center', marginVertical: 10}}>
                    <Image 
                      resizeMode="contain"
                      style={{ height: 150, width: 150 }}
                      source={{ uri: movie.get('poster').length > 0 && movie.get('poster') !== 'N/A.png' ? movie.get('poster'): 'http://placehold.it/350x350'}}
                    />
                    <Text style={{ color: '#008cba', fontSize: 16, marginTop: 3, maxWidth: 250 }}> { movie.get('title') }</Text>
                  </View>
              )
            }
          </ScrollView>
        </View>         
      }

      {/* No results found case */}
      { props.totalResults === 0 && 
        (props.searchTerm && props.searchTerm.length > 0) && 
        <Text style={{ marginVertical : 10, fontSize: 16, color: 'red'}}>No results...</Text>
      }

      <View style={{ backgroundColor: '#222', marginTop: '15%', padding: '1%', width: "100%" }}>
          <Button title="&laquo; Back to Intro" color="white" onPress={navigateToIntro} />
      </View>

    </View>
  )
}

export default Listings;

import React from "react";
import { View, Text, Button } from "react-native";
import { Dispatch } from 'redux'

import { IState as IListingsState} from '../../reducers/listings'
import { navigateTo } from '../../actions/navigation'
import SearchBox from './SearchBox'

interface IListingProps extends IListingsState {
  dispatch: Dispatch<any>,
}

const Listings = (props: IListingProps) => {

  const navigateToIntro = () => props.dispatch(navigateTo('intro'))
  
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

      <Text style={{ fontSize: 20, marginTop:'20%'}}>
        Fetched movies (REPLACE BY LIST)
      </Text>

      <View style={{ backgroundColor: '#222', marginTop: '15%', padding: '1%', width: "100%" }}>
          <Button title="&laquo; Back to Intro" color="white" onPress={navigateToIntro} />
      </View>

    </View>
  )
}

export default Listings;

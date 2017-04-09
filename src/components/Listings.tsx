import React from "react";
import { View, Text, Button } from "react-native";
import { Dispatch } from 'redux'
import { IState as IMainState} from '../reducers/listings'
import { navigateTo } from '../actions/navigation'

interface IListingProps extends IMainState {
  dispatch: Dispatch<any>,
}

const Listings = (props: IListingProps) => {

  const navigateToIntro = () => props.dispatch(navigateTo('intro'))
  
  return (
    <View style={{ flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF"}}>
      <Text style={{ fontSize: 30}}>
        Some content here {props.fetching}
      </Text>

      <View style={{ backgroundColor: '#222', marginTop: '15%', padding: '1%', width: "100%" }}>
          <Button title="&laquo; Back to Intro" color="white" onPress={navigateToIntro} />
      </View>

    </View>
  )
}

export default Listings;

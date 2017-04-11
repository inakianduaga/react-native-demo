import React from "react";
import { View, Button, Text } from "react-native";
import { Dispatch } from 'redux'
// const { Column: Col, Row } = require('react-native-flexbox-grid')

import { IState as IDetailsState } from '../../reducers/details'
import { navigateTo } from '../../actions/navigation'

interface IProps extends IDetailsState {
  dispatch: Dispatch<any>,
}

const Details = (props: IProps) => {

  const navigateBack = () => props.dispatch(navigateTo('listings'))

  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: "#F5FCFF",
      paddingTop: '8%',
    }}>

      {/* Display error if no id selected */}
      { props.imbdId === null ? 
        <View style={{ backgroundColor: 'pink', padding: 10}}>
          <Text style={{ color: '#222'}}>
            Error: No movie id selected! - Native core must provide id
          </Text>
        </View> :
        null
      }
      

      <View style={{ backgroundColor: 'orange', marginTop: '15%', padding: '1%', width: "100%" }}>
        <Button title="&laquo; Back to Intro" color="white" onPress={navigateBack} />
      </View>

    </View>
  )
}

export default Details;

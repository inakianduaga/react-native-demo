import React from "react";
import { View, Button, Text, Image, Platform } from "react-native";
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
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF",
      paddingTop: '8%',
    }}>

      {
        props.imbdId != null ?
        <View style={{ alignItems: 'center'}}>
          
          <Image 
            resizeMode="contain"
            style={{ height: 300, width: 300, marginBottom: 20 }}
            source={{ uri: props.poster && props.poster !== 'N/A' ? props.poster : 'http://placehold.it/300x350'}}
          />
        
          <Text style={{ fontSize: 20, marginBottom: 5}}>
            { props.title}
          </Text>

          <Text style={{ fontSize: 16, color: '#888', fontStyle: 'italic', marginHorizontal: 20}}>
            { props.plot }
          </Text> 

          <Text style={{ fontSize: 14, paddingVertical: 2, paddingHorizontal: 5, marginTop: 30, color: '#888',  marginHorizontal: 20, alignSelf: 'flex-end'}}>
            { props.genre }
          </Text> 

        </View> : 
        null
      }

      {/* Display error if no id selected */}
      { props.imbdId === null ? 
        <View style={{ backgroundColor: 'pink', padding: 10}}>
          <Text style={{ color: '#222'}}>
            Error: No movie id selected! - Native core must provide id
          </Text>
        </View> :
        null
      }
      

      <View style={{ backgroundColor: Platform.OS === 'ios' ? 'orange' : undefined, marginTop: '10%', padding: '1%', width: "100%" }}>
        <Button title="&laquo; Back to movie search" color={Platform.OS === 'ios' ? 'white' : 'orange'} onPress={navigateBack} />
      </View>

    </View>
  )
}

export default Details;

import React from "react";
import { View } from "react-native";
import { IState } from '../reducers/main'

type IProps = IState

const Listings = (props: IProps) => 
  <View>
    Some content here {props.fetching}
  </View>


export default Listings;

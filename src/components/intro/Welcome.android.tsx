import React from "react";
import { View, Text, TextStyle } from "react-native";

type IProps = {
  style: TextStyle
}

const Welcome = ({ style }: IProps) =>
  <View>
    <Text style={[style, {backgroundColor: 'black', color: 'white', padding: '3%', marginBottom: '5%'}]}>
      Android is awesome! IOS sucks!
    </Text>
    <Text style={style}>
      Press Cmd+R to reload, {"\n"}
      Cmd+D or shake for dev menu
    </Text>
  </View>

export default Welcome
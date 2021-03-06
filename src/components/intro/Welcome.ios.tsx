import React from "react";
import { View, Text, TextStyle } from "react-native";

type IProps = {
  style: TextStyle
}

const Welcome = ({ style }: IProps) =>
  <View>
    <Text style={[style, {backgroundColor: 'wheat', padding: '3%', marginBottom: '5%'}]}>
      IOS is awesome! Android sucks!
    </Text>
    <Text style={style}>
      Press Cmd+R to reload, {"\n"}
      Cmd+D or shake for dev menu
    </Text>
  </View>;

export default Welcome
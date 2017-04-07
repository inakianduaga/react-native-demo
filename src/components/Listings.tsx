import React from "react";
import { View } from "react-native";

interface IProps {
  message: "string"
}

const Listings = (props: IProps) => {
  <View>
    Some content here {props.message}
  </View>
}

export default Listings;

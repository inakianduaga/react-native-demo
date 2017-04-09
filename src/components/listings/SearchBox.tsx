import React from "react";
import { TextInput, ActivityIndicator, View } from "react-native";
import { Dispatch } from 'redux'
import { updateSearchTerm } from '../../actions/listings'
 
type IProps = {
  searchTerm: string | null,
  loading: boolean,
  dispatch: Dispatch<any>
}

const SearchBox = ({ searchTerm, dispatch, loading }: IProps) => {

  return (
    <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
      <TextInput
        style={{ fontSize: 26, height: 40, borderColor: '#ccc', borderBottomWidth: 1, paddingHorizontal: '2%', width: '90%', alignSelf: 'flex-start' }}
        onChangeText={(text) => dispatch(updateSearchTerm(text))}
        placeholder="Search for movies..."
        placeholderTextColor='#888'
        value={ searchTerm && searchTerm.length > 0 ? searchTerm : undefined }
      />
      <ActivityIndicator animating={ loading } size="small" color="purple" style={{ alignSelf: 'flex-end', height: 40}} />
    </View>
  )
}

export default SearchBox
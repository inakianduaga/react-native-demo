import React, { Component } from "react";
// import { Platform } from 'react-native'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
import Main from "./containers/App";
import { INavigationState } from './reducers/navigation';
// import codePush from "react-native-code-push";

type IProps = {
  /* Android will always pass a navigation prop, but iOS might not */
  navigation?: INavigationState,
  /* This will only be available on android on the detail page */
  imdbId?: string
}
type IState = {}

const store = configureStore();

class App extends Component<IProps, IState> {
  render() {
    return (
      <Provider store={ store }>
        <Main />
      </Provider>
    );
  }
}

export default App
// TODO: Unwrap once we have implemented codepush for iOS backend
// let WrappedApp;
// if(Platform.OS === 'android') {
//   WrappedApp = codePush({
//     checkFrequency: codePush.CheckFrequency.ON_APP_RESUME, 
//     installMode: codePush.InstallMode.ON_NEXT_RESUME 
//   })(App);
// }

// // For Android, we deploy CodePush wrap, iOS standard (until implemented)
// export default Platform.OS === 'ios' ? App : WrappedApp;
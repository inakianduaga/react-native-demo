'use strict'

import { AppRegistry } from 'react-native'
import App from './build/Index'

// Regular Application
AppRegistry.registerComponent('ReactNativeTS', () => App)

// Secondary application exaple (reusing existing)
AppRegistry.registerComponent('ReactNativeTS2', () => App)
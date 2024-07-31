/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { AppState } from './node_modules/react-native/types/index';
import StackNavigator from './src/components/stacknavigator';
import HomeScreen from './src/screens/HomeScreen';


AppRegistry.registerComponent(appName, () => App);

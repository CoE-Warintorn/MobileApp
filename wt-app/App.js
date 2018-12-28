import React from 'react';
import WeatherScreen from './src/components/WeatherScreen';
import ZipCodeScreen from './src/components/ZipCodeScreen';
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator({
  Weather: WeatherScreen,
  ZipCode: ZipCodeScreen
},{
  initialRouteName: 'Weather',
  initialRouteParams: { zipCode: '90110' },
})

export default class App extends React.Component {

  render() {
    return (
      <RootStack />
    );
  }
}
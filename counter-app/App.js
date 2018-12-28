import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './src/components/HomeScreen';
import CounterScreen from './src/components/CounterScreen';
import SentryBoundary from './SentryBoundary';

import Sentry from 'sentry-expo';
Sentry.enableInExpoDevelopment = true;
Sentry.config('https://5e78fccf02064314b8279ee90eb79e99@sentry.io/1293552').install();

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Counter: {
    screen: CounterScreen
  }
})

export default class App extends React.Component {
  render() {
    return (
      <SentryBoundary>
        <RootStack />
      </SentryBoundary>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

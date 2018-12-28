import React from 'react';
import { createStackNavigator } from 'react-navigation';

import AlbumListScreen from './screens/AlbumListScreen';
import AlbumDetailScreen from './screens/AlbumDetailScreen';
import AddCommentScreen from './screens/AddCommentScreen';

const RootStack = createStackNavigator({
  AlbumListScreen,
  AlbumDetailScreen,
  AddCommentScreen,
}, {
  initialRouteName: 'AlbumListScreen',
});

function App() {
  return <RootStack />;
}

export default App;
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

function NoCommentPlaceholder() {
  return (
    <View style={styles.container}>
      <Text>No comment.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NoCommentPlaceholder;
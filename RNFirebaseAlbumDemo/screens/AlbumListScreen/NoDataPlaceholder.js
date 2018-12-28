import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function NoDataPlaceholder({ addMockData }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No album found.</Text>
      <Button
        title="Add mock data"
        onPress={addMockData}
      />
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
  text: {
    paddingBottom: 16,
  },
});

export default NoDataPlaceholder;
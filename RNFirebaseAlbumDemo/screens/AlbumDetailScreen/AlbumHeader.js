import React from 'react';
import {
  Button,
  Image,
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Rating } from 'react-native-ratings';

class AlbumHeader extends React.Component {
  handleSeePressed = () => {
    const { album: { url }} = this.props;
    Linking.openURL(url);
  }

  render() {
    const { album, onAddComment } = this.props;
    const {
      title,
      artist,
      image,
      url,
      avg_rating,
    } = album;

    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={ image ? { uri: image } : null}
        />
        
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.artist}>{artist}</Text>

          <Rating
            readonly
            type="star"
            imageSize={28}
            startingValue={typeof avg_rating === 'number' ? avg_rating : 0}
          />

          <View style={styles.buttonWrapper}>
            <Button
              title="See on Amazon"
              onPress={this.handleSeePressed}
              disabled={!url}
            />
          </View>

          <View style={styles.buttonWrapper}>
            <Button
              title="Add a comment"
              onPress={onAddComment}
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  image: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
  },
  rightContainer: {
    flex: 1,
    marginLeft: 16,
    flexDirection: 'column',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  artist: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  buttonWrapper: {
    paddingTop: 8,
  },
});

export default AlbumHeader;

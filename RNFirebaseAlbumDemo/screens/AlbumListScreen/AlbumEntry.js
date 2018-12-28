import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { Rating } from 'react-native-ratings';

class AlbumEntry extends React.Component {
  handlePressed = () => {
    const { onPressed, album } = this.props;
    const { _id } = album;
    if (typeof onPressed === 'function')
      onPressed(_id);
  }

  render() {
    const { album } = this.props;
    const {
      title,
      artist,
      thumbnail_image,
      avg_rating,
    } = album;

    return (
      <TouchableHighlight
        onPress={this.handlePressed}
        style={styles.touchable}
      >
        <View style={styles.container}>
          <Image
            source={{ uri: thumbnail_image }}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.artist}>{artist}</Text>
            <Rating
              readonly
              type="star"
              imageSize={20}
              startingValue={typeof avg_rating === 'number' ? avg_rating : 0}
            />
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'white',
  },
  image: {
    width: 48,
    height: 48,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 16,
  },
  title: {
    fontWeight: 'bold',
  },
  artist: {
    fontWeight: 'normal',
  }
});

export default AlbumEntry;

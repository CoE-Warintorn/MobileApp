import React from 'react';
import {
  FlatList,
} from 'react-native';

import AlbumEntry from './AlbumEntry';

class AlbumList extends React.Component {
  handleAlbumSelected = (id) => {
    const { onAlbumSelected } = this.props;

    if (typeof onAlbumSelected === 'function')
      onAlbumSelected(id);
  };

  renderItem = ({item}) => (
    <AlbumEntry
      album={item}
      onPressed={this.handleAlbumSelected}
    />
  );

  keyExtractor = (item) => item._id;

  render() {
    const { albumList } = this.props;

    return (
      <FlatList
        data={albumList}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}

export default AlbumList;
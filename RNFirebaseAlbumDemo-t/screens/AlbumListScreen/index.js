import React from 'react';
import firebase from 'react-native-firebase';

const firestore = firebase.firestore();

import AlbumList from './AlbumList';
import NoDataPlaceholder from './NoDataPlaceholder';

const mockData = [
  {
    _id: "B0014I4KH6",
    "title": "Taylor Swift",
    "artist": "Taylor Swift",
    "url": "https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6",
    "image": "https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg",
    "thumbnail_image": "https://i.imgur.com/K3KJ3w4h.jpg"
  },
  {
    _id: "B001EYGOEM",
    "title": "Fearless",
    "artist": "Taylor Swift",
    "url": "https://www.amazon.com/Fearless-Enhanced-Taylor-Swift/dp/B001EYGOEM",
    "image": "https://images-na.ssl-images-amazon.com/images/I/51qmhXWZBxL.jpg",
    "thumbnail_image": "https://i.imgur.com/K3KJ3w4h.jpg"
  },
  {
    _id: "B003WTE886",
    "title": "Speak Now",
    "artist": "Taylor Swift",
    "url": "https://www.amazon.com/Speak-Now-Taylor-Swift/dp/B003WTE886",
    "image": "https://images-na.ssl-images-amazon.com/images/I/51vlGuX7%2BFL.jpg",
    "thumbnail_image": "https://i.imgur.com/K3KJ3w4h.jpg"
  },
  {
    _id: "B008XNZMOU",
    "title": "Red",
    "artist": "Taylor Swift",
    "url": "https://www.amazon.com/Red-Taylor-Swift/dp/B008XNZMOU",
    "image": "https://images-na.ssl-images-amazon.com/images/I/41j7-7yboXL.jpg",
    "thumbnail_image": "https://i.imgur.com/K3KJ3w4h.jpg"
  },
  {
    _id: "B00MRHANNI",
    "title": "1989",
    "artist": "Taylor Swift",
    "url": "https://www.amazon.com/1989-Taylor-Swift/dp/B00MRHANNI",
    "image": "https://images-na.ssl-images-amazon.com/images/I/717DWgRftmL._SX522_.jpg",
    "thumbnail_image": "https://i.imgur.com/K3KJ3w4h.jpg"
  }
];

class AlbumListScreen extends React.Component {
  static navigationOptions = {
    title: 'Album List',
  };

  state = {
    albumList: [],
  };

  addAlbum(album) {
    // TODO: Add an album to Firestore
    const collection = firestore.collection('albums');
    collection.add(album);
  }

  subscribeToFirestore() {
    // TODO: Retrieve list of albums to firestore
    const collection = firestore.collection('albums');
    this.subscription = collection.onSnapshot((snapshot) => {
      this.updateState(snapshot.docs);
    });
  }

  updateState(docs) {
    // TODO: Convert data to correct format & setState
    const albumList = docs.map((doc) => ({
      _id: doc.id,
      ...doc.data(),
    }));
    this.setState({ albumList });
  }

  unsubscribeFromFirestore() {
    // TODO: unsubscribe from Firestore
    this.subscription();
  }

  componentDidMount() {
    this.subscribeToFirestore();
  }

  componentWillUnmount() {
     this.unsubscribeFromFirestore();
  }

  addMockData = () => {
    mockData.forEach(mockAlbum => {
      const {
        _id,
        ...album
      } = mockAlbum;
      this.addAlbum(album);
    });
  }

  handleAlbumSelected = (id) => {
    const { navigation } = this.props;

    navigation.navigate('AlbumDetailScreen', { albumId: id });
  }

  render() {
    const { albumList } = this.state;

    if (albumList.length === 0) {
      return (
        <NoDataPlaceholder
          addMockData={this.addMockData}
        />
      );
    }
    else {
      return (
        <AlbumList
          albumList={albumList}
          onAlbumSelected={this.handleAlbumSelected}
        />
      );
    }
  }
}

export default AlbumListScreen;
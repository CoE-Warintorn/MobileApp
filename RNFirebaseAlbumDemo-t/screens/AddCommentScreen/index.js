import React from 'react';
import CommentForm from './CommentForm';

import firebase from 'react-native-firebase';

const firestore = firebase.firestore();

class AddCommentScreen extends React.Component {
  static navigationOptions = {
    title: 'Add a comment',
  };

  state = {
    comment: {
      name: '',
      comment: '',
    },
    disableForm: false,
  };

  handleAddComment = () => {
    // TODO: disable the form
    this.setState({ disableForm: true });
    // TODO: add a comment to Firestore
    // TODO: navigate back
    const { comment } = this.state;
    const { navigation } = this.props;
    const albumId = navigation.getParam('albumId');
    const collection = firestore.collection('albums')
                                .doc(albumId)
                                .collection('comments');
    collection.add({
      ...comment,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    }).then(() => navigation.pop());
  }

  handleCommentChanged = (comment) => {
    this.setState({ comment });
  }

  render() {
    const { comment, disableForm } = this.state;

    return (
      <CommentForm
        comment={comment}
        onCommentChanged={this.handleCommentChanged}
        onAddComment={this.handleAddComment}
        disabled={disableForm}
      />
    );
  }
}

export default AddCommentScreen;
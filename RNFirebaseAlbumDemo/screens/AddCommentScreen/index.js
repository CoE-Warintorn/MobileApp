import React from 'react';
import firebase from 'react-native-firebase';

const firestore = firebase.firestore();

import CommentForm from './CommentForm';

class AddCommentScreen extends React.Component {
  static navigationOptions = {
    title: 'Add a comment',
  };

  state = {
    comment: {
      name: '',
      rating: 3,
      comment: '',
    },
    disableForm: false,
  };

  handleAddComment = () => {
    this.setState({ disableForm: true });

    const { comment } = this.state;
    const { navigation } = this.props;
    const albumId = navigation.getParam('albumId');
    const albumRef = firestore.collection('albums')
                                .doc(albumId)
    const collection = albumRef.collection('comments');

    firestore.runTransaction((t) => {
      return t.get(albumRef)
        .then((albumDoc) => {
          const { rating_count, avg_rating } = albumDoc.data();
          let new_rating_count, new_avg_rating;
          if (rating_count === undefined) {
            new_rating_count = 1;
            new_avg_rating = comment.rating;
          }

          else {
            new_rating_count = rating_count + 1;
            new_avg_rating = ((avg_rating * rating_count) + comment.rating ) / new_rating_count;
          }

          const newCommentRef = collection.doc();
          return Promise.all([
            t.set(newCommentRef, {
              ...comment,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            }),
            t.update(albumRef, {
              rating_count: new_rating_count,
              avg_rating: new_avg_rating,
            })
          ]);
        });
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

import React from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { Rating } from 'react-native-ratings';

class CommentForm extends React.Component {
  handleNameChanged = (text) => {
    const { comment, onCommentChanged } = this.props;
    if (typeof onCommentChanged === 'function') {
      onCommentChanged({
        ...comment,
        name: text,
      });
    }
  }

  handleRatingChanged = (rating) => {
    const { comment, onCommentChanged } = this.props;
    if (typeof onCommentChanged === 'function') {
      onCommentChanged({
        ...comment,
        rating,
      });
    }
  }

  handleCommentChanged = (text) => {
    const { comment, onCommentChanged } = this.props;
    if (typeof onCommentChanged === 'function') {
      onCommentChanged({
        ...comment,
        comment: text,
      });
    }
  }

  render() {
    const {
      comment: { name, rating, comment },
      onAddComment,
      disabled,
    } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={this.handleNameChanged}
          editable={!disabled}
        />
        <View style={styles.ratingWrapper}>
          <Rating
            type="star"
            showRating={true}
            imageSize={32}
            fraction={0}
            startingValue={rating}
            onFinishRating={this.handleRatingChanged}
          />
        </View>
        <TextInput
          placeholder="Comment"
          style={styles.comment}
          multiline={true}
          value={comment}
          onChangeText={this.handleCommentChanged}
          editable={!disabled}
        />
        <Button
          title="Add a comment"
          onPress={onAddComment}
          disabled={disabled}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
  },
  ratingWrapper: {
    alignSelf: 'center',
  },
  comment: {
    height: 160,
    textAlignVertical: 'top',
  },
});

export default CommentForm;

import React from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

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
      comment: { name, comment },
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
  comment: {
    height: 160,
    textAlignVertical: 'top',
  },
});

export default CommentForm;
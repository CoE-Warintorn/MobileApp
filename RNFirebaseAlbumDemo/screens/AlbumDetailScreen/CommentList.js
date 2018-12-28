import React from 'react';
import { FlatList } from 'react-native';

import CommentEntry from './CommentEntry';

function renderComment({ item }) {
  return <CommentEntry comment={item} />
}

function commentKeyExtractor(item) {
  return item._id;
}

function CommentList({ commentList }) {
  return (
    <FlatList
      data={commentList}
      renderItem={renderComment}
      keyExtractor={commentKeyExtractor}
    />
  );
}

export default CommentList;
// You will add code to this file
import React, { useState } from 'react';
import CommentInput from './CommentInput';
import Comment from './Comment';
import TimeStamp from './TimeStamp';
import './Comment.css';

const CommentSection = props => {
  const [comments, setComments] = useState(props.comments);
  const [timestamp, setTimestamp] = useState(props.timestamp);

  return (
    <div>
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
      <TimeStamp timestamp={timestamp} />
      <CommentInput />
    </div>
  );
};

export default CommentSection;

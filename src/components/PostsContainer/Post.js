import React from 'react';
import CommentSection from '../CommentSection/CommentSectionContainer';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';
import './Posts.css';

const Post = props => {
  return (
    <div className='post-border'>
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={props.post.imageUrl}
        />
      </div>
      <LikeSection likes={props.post.likes} />
      <CommentSection
        postId={props.post.imageUrl}
        comments={props.post.comments}
        timestamp={props.post.timestamp}
      />
    </div>
  );
};

export default Post;

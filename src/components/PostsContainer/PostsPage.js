import React, { useState } from 'react';
import Post from './Post';
import './Posts.css';
import dummyData from '../../dummy-data';

const PostsPage = () => {
  const [posts, setPosts] = useState(dummyData);
  return (
    <div className='posts-container-wrapper'>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default PostsPage;

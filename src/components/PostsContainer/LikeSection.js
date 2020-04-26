import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';

const LikeSection = props => {
  const [likes, setLikes] = useState(props.likes);
  function addLikes() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <div className='like-section' key='likes-icons-container'>
        <div className='like-section-wrapper'>
          <FontAwesomeIcon
            icon={faHeart}
            style={{ cursor: 'pointer' }}
            onClick={addLikes}
          />
        </div>
        <div className='like-section-wrapper'>
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
      <p className='like-number'>{likes} likes</p>
    </div>
  );
};

export default LikeSection;

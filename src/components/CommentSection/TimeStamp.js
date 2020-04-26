import React from 'react';
import moment from 'moment';
import './Comment.css';

const TimeStamp = props => {
  return (
    <div>
      <p className='timestamp'>
        {moment(props.timestamp, 'MMMM Do YYYY, HH:mm').fromNow()}
      </p>
    </div>
  );
};

export default TimeStamp;

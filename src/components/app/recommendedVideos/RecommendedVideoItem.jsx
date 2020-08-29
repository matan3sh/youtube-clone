import React from 'react';

import Avatar from '@material-ui/core/Avatar';

const RecommendedVideoItem = ({ video }) => {
  return (
    <div className='videoItem'>
      <img src={video?.image} alt={video?.title} />
      <div className='videoItem__info'>
        <Avatar
          className='videoItem__avatar'
          alt={video?.channel}
          src={video?.channelImage}
        />
        <div className='videoItem__text'>
          <h4>{video?.title}</h4>
          <p>{video?.channel}</p>
          <p>
            {video?.views} <span>Views</span> • {video?.timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecommendedVideoItem;

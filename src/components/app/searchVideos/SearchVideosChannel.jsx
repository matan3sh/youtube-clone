import React from 'react';

import { Avatar } from '@material-ui/core';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

const SearchVideosChannel = ({ channel }) => {
  return (
    <div className='searchVideosChannel'>
      <Avatar
        className='searchVideosChannel__logo'
        alt={channel.channel}
        src={channel.image}
      />
      <div className='searchVideosChannel__text'>
        <h4>
          {channel.channel}
          {channel.verified && <CheckCircleOutlinedIcon />}
        </h4>
        <p>
          {channel.subs} Subscribers • {channel.noOfVideos} Videos
        </p>
        <p>{channel.description}</p>
      </div>
    </div>
  );
};

export default SearchVideosChannel;

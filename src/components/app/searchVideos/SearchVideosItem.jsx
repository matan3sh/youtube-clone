import React from 'react';

const SearchVideosItem = ({ video }) => {
  return (
    <div className='searchVideosItem'>
      <img src={video.image} alt={video.title} />
      <div className='searchVideosItem__text'>
        <h3>{video.title}</h3>
        <p className='searchVideosItem__headline'>
          {video.channel} •{' '}
          <span>
            <span>{video.subs}</span> Subscribers
          </span>{' '}
          {video.views} • {video.timestamp}
        </p>
        <p className='searchVideosItem__description'>{video.description}</p>
      </div>
    </div>
  );
};

export default SearchVideosItem;

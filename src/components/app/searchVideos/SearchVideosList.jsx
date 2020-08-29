import React from 'react';
import SearchVideosItem from './SearchVideosItem';

const SearchVideosList = ({ videos }) => {
  return (
    <div>
      {videos?.map((video) => (
        <SearchVideosItem video={video} key={video?.channel} />
      ))}
    </div>
  );
};

export default SearchVideosList;

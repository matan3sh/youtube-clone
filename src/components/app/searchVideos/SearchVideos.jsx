import React from 'react';

import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';

const SearchVideos = () => {
  return (
    <div className='searchVideos'>
      <div className='searchVideos__filter'>
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />
    </div>
  );
};

export default SearchVideos;

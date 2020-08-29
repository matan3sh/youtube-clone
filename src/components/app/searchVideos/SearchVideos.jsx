import React from 'react';

import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import SearchVideosList from './SearchVideosList';
import SearchVideosChannel from './SearchVideosChannel';

const channel = {
  image:
    'https://yt3.ggpht.com/a/AATXAJw6qBlNzbAweKz7UlC44hYLoEtdoXGmzN8IJno3mg=s100-c-k-c0xffffffff-no-rj-mo',
  channel: 'Traversy Media',
  verified: true,
  subs: '1.23M',
  noOfVideos: 816,
  description:
    'Traversy Media features the best online web development and programming tutorials for all of the latest web',
};

const videos = [
  {
    title: 'How To Hack A Car',
    views: '12K',
    timestamp: '3 Days Ago',
    image:
      'https://i.ytimg.com/vi/6WRImH5ZmjI/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB1iv7x7KVpqfanSfa6WA8pjLgRrQ',
    channel: 'Kalle Hallden',
    subs: '359K',
    description:
      'If you want to receive one short email from me every week, where I go through a few of the most useful things I have explored and discovered this week. Things like; favourite apps, articles',
  },
  {
    title: 'NBA 2K21: Welcome to 2K Beach + Your MyCAREER',
    views: '743K',
    timestamp: '1 Hour Ago',
    image:
      'https://i.ytimg.com/vi/JdRlookJMso/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCPE4EXn11wzlkj99MNphkaoYTv8w',
    channel: 'NBA 2K',
    subs: '746K',
    description:
      'Check out the new Neighborhood - 2K Beach! Soak up the sun and escape to the ocean in a beautiful new setting, surrounded by modern facilities that house SWAGs, The REC, the NBA Store, and much more.',
  },
  {
    title: 'React Hooks - Most Used Features',
    views: '13K',
    timestamp: 'A Year Ago',
    image:
      'https://i.ytimg.com/vi/-9M9CGSd69I/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDlW5wMuk1LqlnJURpV_cV2EGc8Vw',
    channel: 'JavaScript Mastery',
    subs: '48.4K',
    description:
      'In this video we will explore React Hooks. React hooks allow us to provide additional features to functional components. Well dive into useState(), useEffect() and custom hooks in great detail. useState hook allows us to store state in a functional component and useEffect hook replaces almost all of the lifecycle methods that class based components have.',
  },
];

const SearchVideos = () => {
  return (
    <div className='searchVideos'>
      <div className='searchVideos__filter'>
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <SearchVideosChannel channel={channel} />
      <hr />
      <SearchVideosList videos={videos} />
    </div>
  );
};

export default SearchVideos;

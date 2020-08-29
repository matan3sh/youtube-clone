import React from 'react';
import RecommendedVideoItem from './RecommendedVideoItem';

const recomendedVideos = [
  {
    title: 'How To Hack A Car',
    views: '12K',
    timestamp: '3 Days Ago',
    image:
      'https://i.ytimg.com/vi/6WRImH5ZmjI/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB1iv7x7KVpqfanSfa6WA8pjLgRrQ',
    channel: 'Kalle Hallden',
    channelImage:
      'https://yt3.ggpht.com/a/AATXAJx6pGCQf6YhdGWPuGRuav-JIccbExMIHWNgb9Oo4g=s48-c-k-c0xffffffff-no-rj-mo',
  },
  {
    title: 'NBA 2K21: Welcome to 2K Beach + Your MyCAREER',
    views: '743K',
    timestamp: '1 Hour Ago',
    image:
      'https://i.ytimg.com/vi/JdRlookJMso/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCPE4EXn11wzlkj99MNphkaoYTv8w',
    channel: 'NBA 2K',
    channelImage:
      'https://yt3.ggpht.com/a/AATXAJzrbi1DbnOxW51LssZ5QgWwUrFJbvdLdszucFNL5A=s48-c-k-c0xffffffff-no-rj-mo',
  },
  {
    title: 'React Hooks - Most Used Features',
    views: '13K',
    timestamp: 'A Year Ago',
    image:
      'https://i.ytimg.com/vi/-9M9CGSd69I/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDlW5wMuk1LqlnJURpV_cV2EGc8Vw',
    channel: 'JavaScript Mastery',
    channelImage:
      'https://yt3.ggpht.com/a/AATXAJx_1d5dpZETr6oOBANDbkDtqp9h4n9RWCXeKrWM0Q=s48-c-k-c0xffffffff-no-rj-mo',
  },
];

const RecommendedVideoList = () => {
  return (
    <div className='recommendedVideos__videos'>
      {recomendedVideos?.map((video) => (
        <RecommendedVideoItem video={video} key={video.title} />
      ))}
    </div>
  );
};

export default RecommendedVideoList;

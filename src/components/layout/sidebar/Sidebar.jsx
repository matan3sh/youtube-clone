import React from 'react';
import SidebarRow from './SidebarRow';

import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

const Sidebar = ({ openMenu }) => {
  return (
    <div className={`sidebar ${openMenu ? 'active' : ''}`}>
      <SidebarRow selected title='Home' Icon={HomeIcon} />
      <SidebarRow title='Tranding' Icon={WhatshotIcon} />
      <SidebarRow title='Subscription' Icon={SubscriptionsIcon} />
      <hr />
      <SidebarRow title='Library' Icon={VideoLibraryIcon} />
      <SidebarRow title='History' Icon={HistoryIcon} />
      <SidebarRow title='Your Videos' Icon={OndemandVideoIcon} />
      <SidebarRow title='Watch Later' Icon={WatchLaterIcon} />
      <SidebarRow title='Liked Videos' Icon={ThumbDownAltOutlinedIcon} />
      <SidebarRow title='Show More' Icon={ExpandMoreOutlinedIcon} />
      <hr />
    </div>
  );
};

export default Sidebar;

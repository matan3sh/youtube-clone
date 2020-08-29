import React from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';

import Avatar from '@material-ui/core/Avatar';

const Header = ({ toggleMenu }) => {
  return (
    <div className='header'>
      <div className='header__left'>
        <MenuIcon onClick={toggleMenu} className='header__menuIcon' />
        <img
          className='header__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg'
          alt='logo'
        />
      </div>
      <div className='header__center'>
        <input placeholder='Search' type='text' />
        <SearchIcon className='header__inputButton' />
      </div>
      <div className='header__right'>
        <VideoCallIcon className='header__icon' />
        <AppsIcon className='header__icon' />
        <NotificationsIcon className='header__icon' />
        <Avatar
          alt='avatar'
          src='https://avatars0.githubusercontent.com/u/44439428?s=460&u=27fed5ba4905eae94ad362b54b683d3c48c39316&v=4'
        />
      </div>
    </div>
  );
};

export default Header;

import React from 'react';

import { connect } from 'react-redux';
import { RecommendedVideos } from '../app';

const Home = () => {
  return <RecommendedVideos />;
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

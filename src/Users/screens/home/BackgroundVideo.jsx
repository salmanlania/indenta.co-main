// BackgroundVideo.js
import React from 'react';

const backgroundVideoStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
};

const videoStyle = {
  objectFit: 'cover',
  width: '100%',
  height: '100%',
};

const BackgroundVideo = ({ videoSource }) => {
  return (
    <div style={backgroundVideoStyle}>
      <video autoPlay loop muted style={videoStyle}>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;

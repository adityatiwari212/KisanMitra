import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8));
`;

const VideoElement = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VideoText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  z-index: 2;
`;

function Video() {
  return (
    <VideoContainer className="video-container">
      <VideoElement
        id="background-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://assets-global.website-files.com/62551fa7bee8db16e944f95d/631e043726ebf9f7b2399002_final%20video-transcode.mp4"
          type="video/mp4"
        />
        <source
          src="https://assets-global.website-files.com/62551fa7bee8db16e944f95d/631e043726ebf9f7b2399002_final%20video-transcode.webm"
          type="video/webm"
        />
        Your browser does not support the video tag.
      </VideoElement>
      <VideoOverlay />
      <VideoText>
        <h2>Discover Our Modern Farming Solutions</h2>
        <p>Revolutionizing agriculture for a sustainable future</p>
      </VideoText>
    </VideoContainer>
  );
}

export default Video;

import React from 'react';

const style = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    boxSizing: 'border-box',
    zIndex: -1,
  };

function Video() {
  return (
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        playsInline={true}
        style={style}
      >
        <source
          src="https://www.uni.cards/videos/nxt_wave_bg.mp4"
          type="video/mp4"
        />
      </video>
  );
}

export default Video;

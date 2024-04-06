import React from 'react'
import Video from '../components/Video';
import Header from '../components/Header';

function Welcome() {
  return (
    <div style={{ height: "100vh", width: "100vw"}}>
      <div style={{padding:"0px 30px"}}>
        <Header/>
      </div>
      <Video />
    </div>
  )
}

export default Welcome;
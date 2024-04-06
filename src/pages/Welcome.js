import React from 'react'
import Video from '../components/Video';
import Header from '../components/Header';
import WelcomeMain from '../components/WelcomeMain';

function Welcome() {
  return (
    <div style={{ height: "100vh", width: "100vw"}}>
      <div style={{padding:"0px 30px"}}>
        <Header/>
        <WelcomeMain />
      </div>
      <Video />
    </div>
  )
}

export default Welcome;
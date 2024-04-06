import React from 'react'
import {useMobile} from '../MobileContext';
import WelcomeLabel from './WelcomeLabel';
import WelcomeHighlight from './WelcomeHighlight';
function WelcomeMain() {
  const {mobile}=useMobile();
  return (
    <div style={{height:"65vh",
    marginTop:mobile?"100px":0,
    fontFamily: "Matter, sans-serif"
    }}>
      {mobile ? 
     <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "25px",
     }}>
      <img
            src="https://www.uni.cards/images/nx-wave/nx_wave_hero.png"
            style={{ width: "250px", height: "250px"}}
          />
          <WelcomeLabel/>
          <WelcomeHighlight/>
          
     </div> : <img
            src="https://www.uni.cards/images/nx-wave/nx_wave_hero.png"
            style={{ width: "250px", height: "250px"}}
          />}
    </div>
  )
}

export default WelcomeMain;
import React from 'react'
import {useMobile} from '../MobileContext';
function WelcomeMain() {
  const {mobile}=useMobile();
  return (
    <div style={{height:"65vh",
    marginTop:mobile?"100px":0,
    }}>
      {mobile ? 
     <div style={{
      display: "flex",
      flexDirection: "column",
      maxWidth: "300px",
     }}>
      <img
            src="https://www.uni.cards/images/nx-wave/nx_wave_hero.png"
            style={{ width: "250px", height: "250px"}}
          />
          
     </div> : <img
            src="https://www.uni.cards/images/nx-wave/nx_wave_hero.png"
            style={{ width: "250px", height: "250px"}}
          />}
    </div>
  )
}

export default WelcomeMain;
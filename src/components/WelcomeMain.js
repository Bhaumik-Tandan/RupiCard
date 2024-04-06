import React from 'react'
import {useMobile} from '../MobileContext';
import WelcomeLabel from './WelcomeLabel';
import WelcomeHighlight from './WelcomeHighlight';
import PhoneNumberInput from './PhoneNumberInput';
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
          
     </div> : 
     <div
     style={{
      display: "flex",
      gap: "60px",
      justifyContent:"space-between",
      alignItems:"center",
      height:"65vh",
     }}
     >
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "25px",
      
      }}>
      <WelcomeLabel/>
          <WelcomeHighlight/>
          <PhoneNumberInput type="header"/>
        </div>
     <img
            src="https://www.uni.cards/images/nx-wave/nx_wave_hero.png"
            style={{ width: "350px", height: "350px"}}
          />

          </div>
          }
    </div>
  )
}

export default WelcomeMain;
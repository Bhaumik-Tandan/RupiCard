import React from 'react'
import { useMobile } from '../../MobileContext';
import './index.css';
import AgreeText from '../../constants/AgreeText';
function MobilePhoneInput() {
  const {mobile}=useMobile();
  return mobile &&(
    <div
    className='MobilePhoneInput'
    >
      <div style={{
        display:'flex',
        justifyContent:"space-between",
        background:"rgb(253, 239, 120)",
        padding:'1rem',
        fontFamily:'"Matter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        borderRadius:'10px',
        fontSize:'15px',
        width:'85vw'
      }}>
        Apply now
        <img src="https://www.uni.cards/images/right_arrow.svg"/>
      </div>
      <label
        style={{
          display: "flex",
          alignItems: "left",
          width: "300px",
          fontSize: "10px",
          width:"80%",
          color:"white",
          marginTop:"1rem",
        }}
      >
        <input
          type="checkbox"
          // checked={isAgreed}
          // onChange={(e) => setIsAgreed(e.target.checked)}
          style={{ margin: "0 5px",
          background: "transparent",
          border:"none",
        
         }}
        />
        {AgreeText}
      </label>
    </div>
  )
}

export default MobilePhoneInput;
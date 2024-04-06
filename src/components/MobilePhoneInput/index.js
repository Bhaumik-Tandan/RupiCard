import React from 'react'
import { useMobile } from '../../MobileContext';
import './index.css';
function MobilePhoneInput() {
  const {mobile}=useMobile();
  return mobile &&(
    <div
    className='MobilePhoneInput'
    >
      <div style={{
        display:'flex',
        justifyContent:"space-between",
        margin:'0 5vw',
        background:"rgb(253, 239, 120)",
        padding:'1rem',
        fontFamily:'"Matter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        borderRadius:'10px',
        fontSize:'15px',
      }}>
        Apply now
        <img src="https://www.uni.cards/images/right_arrow.svg"/>
      </div>
    </div>
  )
}

export default MobilePhoneInput;
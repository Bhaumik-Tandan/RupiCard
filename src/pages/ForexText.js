import React from 'react'
import { useMobile } from '../MobileContext'
function ForexText() {
    const {mobile}=useMobile();
    return (
      <div className="card" style={mobile?{
          
      }:{
          justifyContent:"center",
          gap:"50px",
          margin:"200px"
      }}>
        <img className="card-image" src="https://www.uni.cards/images/forex_globe.png" alt="Avatar" />
        <div className="card-content">
        <strong>Zero Forex Markup.</strong>Go international, without any fees.
        </div>
      </div>
    );
}

export default ForexText;
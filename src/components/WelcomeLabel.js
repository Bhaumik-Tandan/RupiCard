import React from 'react'
import { useMobile } from '../MobileContext';
function WelcomeLabel() {
    const {mobile} = useMobile();

  return (
    <div style={mobile?{
        fontSize: "30px",
        maxWidth: "300px",
    }:{
        fontSize: "50px",
    }}>
        <strong>NX Wave.</strong> The next-gen credit card for those who love rewards.
    </div>
  )
}

export default WelcomeLabel;
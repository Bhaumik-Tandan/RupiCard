import React from 'react'
import { useMobile } from '../MobileContext';
function WelcomeLabel() {
    const {mobile} = useMobile();

  return (
    <div style={{
        fontSize: mobile?"30px":"72px",
        maxWidth: "300px",
    }}>
        <strong>NX Wave.</strong> The next-gen credit card for those who love rewards.
    </div>
  )
}

export default WelcomeLabel;
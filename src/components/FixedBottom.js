import React from 'react'
import PhoneNumberInput from './PhoneNumberInput';

function FixedBottom() {
  return (
    <div style={{
      width: '100%',
      position: 'fixed',
      bottom: 0,
      left: 0,
      backgroundColor: 'rgb(245, 245, 245)'
    }}>
        <PhoneNumberInput/>
    </div>
  )
}

export default FixedBottom;
import React from 'react'
import PhoneNumberInput from './PhoneNumberInput';
import { useMobile } from '../MobileContext';

function FixedBottom({style}) {
  const {mobile}=useMobile();
  return !mobile && (
    <div style={style}>
        <PhoneNumberInput type="footer"/>
    </div>
  )
}

export default FixedBottom;
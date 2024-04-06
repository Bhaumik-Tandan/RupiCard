import React from 'react'
import Star from '../icons/star.svg';
import {useMobile} from '../MobileContext';

function WelcomeHighlight() {
    const {mobile} = useMobile();
    const styles = {
        image: {
          width: "10px",
          aspectRatio: "1",
          marginLeft: "5px",
          marginRight: "5px",
        },
      };
  return (
    <div style={{ fontSize: mobile?".875rem": "1rem",fontWeight:500}}>
    1% Cashback
    <img src={Star} alt="Star" style={styles.image} />
    5x Rewards
    <img src={Star} alt="Star" style={styles.image} />
    Zero Forex Markup
  </div>
  )
}

export default WelcomeHighlight;
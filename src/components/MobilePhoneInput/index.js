import React from 'react';
import { useMobile } from '../../MobileContext';
import AgreeText from '../../constants/AgreeText';

function MobilePhoneInput() {
  const { mobile } = useMobile();
  return mobile ? (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        zIndex: 1000,
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 110%)',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <div style={{
          position: 'relative',
          top: '2vh',
          width: `calc(92vw)`,
          background: "black",
          padding: '1vh 1rem',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          borderColor: "rgb(253, 239, 120)",
          borderWidth: '1px',
          borderStyle: 'solid',
          boxSizing: 'border-box',
          zIndex: '-1',
          borderRadius: '10px',
          paddingBottom: '1rem'
        }}>
          <input
            type="text"
            maxLength="10"
            placeholder="Enter phone number"
            style={{
              height: "35px",
              fontSize: "15px",
              outline: "none",
              border: "none",
              color: "white",
              backgroundColor: "black",
              width: "150px",
              paddingLeft: "5px",
            }}
          />
        </div>
        <div style={{
          display: 'flex',
          justifyContent: "space-between",
          background: "rgb(253, 239, 120)",
          padding: '1rem',
          fontFamily: '"Matter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
          borderRadius: '10px',
          fontSize: '15px',
          width: '85vw'
        }}>
          Apply now
          <img src="https://www.uni.cards/images/right_arrow.svg" alt="right arrow" />
        </div>
      </div>
      <label
        style={{
          display: "flex",
          alignItems: "center", // Corrected alignment
          width: "300px",
          fontSize: "10px",
          color: "white",
          margin: "1rem",
        }}
      >
        <input
          type="checkbox"
          style={{
            margin: "0 5px",
            background: "transparent",
            border: "none",
          }}
        />
        {AgreeText}
      </label>
    </div>
  ) : null; // Corrected return for falsy mobile
}

export default MobilePhoneInput;

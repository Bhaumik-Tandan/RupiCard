import React from 'react'
import COLORS from '../constants/Colors'
import RightArrow from '../icons/right-arrow.svg';
function Menu() {
  return (
    <div
    style={{
        width: "100%",
        backgroundColor: COLORS.BUTTON,
        position: "absolute",
        left: 0,
        padding: "20px",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        boxSizing: "border-box",
    }}
    >
        <span style={{
            alignContent: "center",
            fontFamily:'"Matter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
        }}>Uni Paychek</span>
        <img
            src={RightArrow}
            alt="Menu"
            style={{ width: "25px", aspectRatio: "1"}}
          />
    </div>
  )
}

export default Menu
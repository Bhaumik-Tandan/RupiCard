import React,{useState} from 'react';
import { useMobile } from '../../MobileContext';
import AgreeText from '../../constants/AgreeText';
import Cross from "../../icons/cross.svg";
import Tick from "../../icons/tick.svg";
function MobilePhoneInput() {
  const { mobile } = useMobile();
  const [boxesVisible, setBoxesVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const isPhoneNumberValid = (number) => {
    return number.length === 10 && number[0] !== "0";
  };

  const InputButton = () =>
    phoneNumber && (
      <img
        src={isPhoneNumberValid(phoneNumber) ? Tick : Cross}
        alt="icon"
        style={{ height: "15px", width: "15px" }}
        onClick={()=>{
            if(!isPhoneNumberValid(phoneNumber))
                setPhoneNumber("");
        }}
      />
    );
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
      { <div style={{
          position: 'relative',
          top: '2vh',
          width: `calc(88vw)`,
          background: "black",
          padding: '1vh 1vw',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          borderColor: "rgb(253, 239, 120)",
          borderWidth: '1px',
          borderStyle: 'solid',
          boxSizing: 'border-box',
          borderRadius: '10px',
          paddingBottom: '1rem',
          transform: boxesVisible ? 'scaleY(1)' : 'scaleY(0)',
          transformOrigin: 'bottom',
          transition: 'transform 0.2s ease-out',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <input
            type="text"
            value={phoneNumber}
          maxLength="10"
          placeholder="Enter phone number"
          onChange={(e) => setPhoneNumber(e.target.value)}
            style={{
              height: "40px", // Adjusted to match the button height
              fontSize: "15px",
              outline: "none",
              border: "none",
              color: "#fdef78",
              backgroundColor: "black",
              width: "150px",
              paddingLeft: "5px",
            }}
          />
          <InputButton/>
        </div>}
        <div style={{
          display: 'flex',
          justifyContent: "space-between",
          background: "rgb(253, 239, 120)",
          padding: '10px', // Adjust padding as necessary to align with the input height
          fontFamily: '"Matter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
          borderRadius: '10px',
          fontSize: '15px',
          width: '85vw',
          height: '40px', // Explicit height set to match the input box
          alignItems: 'center', // This ensures vertical alignment of the button contents,
          zIndex: '1',
        }}
        onClick={() => setBoxesVisible((prev)=>!prev)}
        >
          Apply now
          <img src="https://www.uni.cards/images/right_arrow.svg" alt="right arrow" style={{height: '20px'}} />
        </div>
      </div>
      { 
      boxesVisible &&
      <label
        style={{
          display: "flex",
          width: "300px",
          fontSize: "10px",
          color: "white",
          margin: "1rem 2rem",
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
}
    </div>
  ) : null; // Corrected return for falsy mobile
}

export default MobilePhoneInput;


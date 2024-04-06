import { useState } from "react";
import Cross from "../icons/cross.svg";
import Tick from "../icons/tick.svg";

function PhoneNumberInput({ type }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);

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

  const canApply = isPhoneNumberValid(phoneNumber) && isAgreed;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: type == "header" ? "column" : "row",
        fontFamily: "Matter, sans-serif",
        background: type==="header"?"":'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 110%)',
      }}
    >
      <div
        style={{
          display: "flex",
          background: "black",
          alignItems: "center",
          width: "fit-content",
          padding: "5px",
          borderRadius: "10px",
          gap: "10px",
        }}
      >
        <input
          type="text"
          value={phoneNumber}
          maxLength="10"
          placeholder="Enter phone number"
          onChange={(e) => setPhoneNumber(e.target.value)}
          style={{
            height: "35px",
            fontSize: "15px",
            border: "none",
            outline: "none",
            color: "white",
            backgroundColor: "black",
            width: "150px",
            paddingLeft: "5px",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <InputButton />
        </div>
        <button
          style={{
            padding: "15px",
            fontSize: ".875rem",
            border: "none",
            borderRadius: "10px",
            backgroundColor: "rgba(253, 239, 120)" ,
            color: "black",
            cursor: canApply ? "pointer" : "default",
          }}
          disabled={!canApply}
          onClick={() => {
            alert("Number submitted!");
          }}
        >
          Apply Now
        </button>
      </div>
      <label
        style={{
          display: "flex",
          alignItems: "center",
          width: "300px",
          fontSize: "10px",
            marginTop: type == "header" ? "25px" : "0"
        }}
      >
        <input
          type="checkbox"
          checked={isAgreed}
          onChange={(e) => setIsAgreed(e.target.checked)}
          style={{ margin: "0 5px",
          background: "transparent",
          border:"none",
        
         }}
        />
        You agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp
        to guide you through your application.
      </label>
    </div>
  );
}

export default PhoneNumberInput;

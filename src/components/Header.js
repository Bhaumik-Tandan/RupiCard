import React, { useState, useEffect } from "react";
import Uni from "../icons/uni.svg";
import MenuIcon from "../icons/menu.svg";
import Cross from "../icons/cross.svg";
import Menu from "./Menu";
import UniButton from "./UniButton";
import { useMobile } from "../MobileContext";

function Header() {
  const [menu, setMenu] = useState(false);
  const { mobile } = useMobile();

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img src={Uni} alt="Uni" style={{ width: "75px", aspectRatio: "1" }} />
        {!mobile && (
          <div style={{ marginTop: "20px" }}>
            <UniButton />
          </div>
        )}
        {mobile &&
          (menu ? (
            <img
              src={Cross}
              alt="Cross"
              style={{ width: "30px", height: "30px", marginTop: "20px" }}
              onClick={() => setMenu(false)}
            />
          ) : (
            <img
              src={MenuIcon}
              alt="Menu"
              style={{ width: "30px", aspectRatio: "1" }}
              onClick={() => setMenu(true)}
            />
          ))}
      </div>
      {menu&&mobile && <Menu />}
    </div>
  );
}

export default Header;

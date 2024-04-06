import React, { useState, useEffect } from 'react';
import Uni from '../icons/uni.svg';
import MenuIcon from '../icons/menu.svg';
import Cross from '../icons/cross.svg';
import Menu from './Menu';
import UniButton from './UniButton';

function Header() {
  const [menu, setMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Effect to handle window resize
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    
    // Cleanup this component
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
      }}>
          <img
              src={Uni}
              alt="Uni"
              style={{ width: "75px", aspectRatio: "1"}}
            />
            {windowWidth > 768 && (
              <div style={{marginTop:"20px"}}>
                <UniButton/>
              </div>
            )}
           
            {
              menu ?
              <img
              src={Cross}
              alt="Cross"
              style={{ width: "30px", height:"30px", marginTop:"20px"}}
              onClick={() => {
                setMenu(false);
              }}
            /> : windowWidth <= 768 && (
              <img
                src={MenuIcon}
                alt="Menu"
                style={{ width: "30px", aspectRatio: "1"}}
                onClick={() => {
                  setMenu(true);
                }}
              />
            )}
      </div>
      {menu && <Menu/>}
    </div>
  );
}

export default Header;

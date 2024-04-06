import React, { useRef, useEffect, useState } from "react";
import "./index.css";
import FixedBottom from "../../components/FixedBottom";

function AnimatedText() {
  const arrowRef = useRef(null);
  const [listenScroll, setListenScroll] = useState(false);
  const [arrowWasFullyVisible, setArrowWasFullyVisible] = useState(false);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        setListenScroll(entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: [0, 1]
    });

    if (arrowRef.current) observer.observe(arrowRef.current);

    return () => {
      if (arrowRef.current) observer.unobserve(arrowRef.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!arrowRef.current) return;

      const arrowRect = arrowRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const isFullyVisible = arrowRect.top >= 0 && arrowRect.bottom <= viewportHeight;

      if (isFullyVisible && !arrowWasFullyVisible) {
        setArrowWasFullyVisible(true);
      } else if (!isFullyVisible && arrowWasFullyVisible) {
        setArrowWasFullyVisible(false);
      }
    };

    if (listenScroll) {
      window.addEventListener("scroll", handleScroll);
    } else {
      setArrowWasFullyVisible(false); 
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [listenScroll]);

  return (
    <>
      <div className="animated-text">
        <span><strong>Earn 1% assured cashback</strong> on your spends. Get <strong>5X</strong> more value than cashback at the Uni Store. Enjoy</span>
        <span>round the clock <strong>Whatsapp support</strong>. And it's</span>
        <span><strong>lifetime free</strong>; no joining fee, no annual charges.</span>
        <div className="arrow-container" ref={arrowRef}>
          <img src="https://www.uni.cards/images/down_arrow.svg" alt="arrow" />
        </div>
      </div>
      {arrowWasFullyVisible && (
        <FixedBottom style={{
          position: 'fixed',
          left: 0, 
          bottom: 0,
          width: '100%',
          zIndex: 1000,
          padding: '10px',
          backgroundColor: 'rgb(245, 245, 245)',
          boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
          textAlign: 'center',
        }}/>
      )}
    </>
  );
}

export default AnimatedText;

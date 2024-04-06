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
      const hasJustDisappeared = arrowRect.top > viewportHeight;

      if (isFullyVisible && !arrowWasFullyVisible) {
        console.log("Scrolled below the arrow (arrow is fully visible)");
        setArrowWasFullyVisible(true);
      } else if (!isFullyVisible && arrowWasFullyVisible && hasJustDisappeared) {
        console.log("Scrolled above the arrow (arrow has just become invisible as user scrolled up)");
        setArrowWasFullyVisible(false);
      }
    };

    if (listenScroll) {
      window.addEventListener("scroll", handleScroll);
    } else if (!listenScroll) {
      setArrowWasFullyVisible(false); 
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [listenScroll, arrowWasFullyVisible]);

  return (
    <>
    <div className="animated-text">
      <span><strong>Earn 1% assured cashback</strong> on your spends. Get <strong>5X</strong></span>
      <span><strong>more value than cashback</strong> at the Uni Store. Enjoy</span>
      <span>round the clock <strong>Whatsapp support</strong>. And it's</span>
      <span><strong>lifetime free</strong>; no joining fee, no annual charges.</span>
      <div className="arrow-container" ref={arrowRef}>
        <img src="https://www.uni.cards/images/down_arrow.svg" alt="arrow" />
      </div>
    </div>
    <FixedBottom style={{
      // display:"none"
    }}/>
    </>
  );
}

export default AnimatedText;

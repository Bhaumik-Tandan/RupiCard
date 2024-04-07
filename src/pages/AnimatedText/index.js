import React, { useRef, useEffect, useState } from "react";
import "./index.css";
import FixedBottom from "../../components/FixedBottom";

function AnimatedText() {
  const arrowRef = useRef(null);
  const [listenScroll, setListenScroll] = useState(false);
  const [arrowWasFullyVisible, setArrowWasFullyVisible] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const textRef = useRef(null); // Reference to the animated text container
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        setIsTextVisible(entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 0.1 // Adjust threshold as needed
    });

    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  useEffect(() => {
    if (isTextVisible) {
      // Once the text is visible, add classes to trigger animations
      const spans = textRef.current.querySelectorAll('span');
      spans.forEach((span, index) => {
        setTimeout(() => {
          span.classList.add('slide-up');
        }, 300 * (index + 1)); // Adjust timing as needed
      });
      const arrow = textRef.current.querySelector('.arrow-container');
      if (arrow) {
        setTimeout(() => {
          arrow.classList.add('slide-down');
        }, 300 * (spans.length + 1));
      }
    }
  }, [isTextVisible]);

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
    let intervalId = null;
  
    const startOpacityInterval = (adjustOpacity) => {
      let iterations = 0;
      const maxIterations = 20; 
  
      intervalId = setInterval(() => {
        adjustOpacity();
        iterations++;
        
        if (iterations >= maxIterations) {
          clearInterval(intervalId);
        }
      }, 50);
    };
  
    if (arrowWasFullyVisible) {
      startOpacityInterval(() => setOpacity(prev => {
        const newOpacity = Math.min(1, prev + 0.1);
        if (newOpacity === 1) {
          clearInterval(intervalId);
        }
        return newOpacity;
      }));
    } else {
      // Decrease opacity
      startOpacityInterval(() => setOpacity(prev => {
        const newOpacity = Math.max(0, prev - 0.1);
        if (newOpacity === 0) {
          clearInterval(intervalId);
        }
        return newOpacity;
      }));
    }
  
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [arrowWasFullyVisible]);
  
  

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
      <div className="animated-text" ref={textRef}>
        <span><strong>Earn 1% assured cashback</strong> on your spends. Get <strong>5X</strong> more value than cashback at the Uni Store. Enjoy</span>
        <span>round the clock <strong>Whatsapp support</strong>. And it's</span>
        <span><strong>lifetime free</strong>; no joining fee, no annual charges.</span>
        <div className="arrow-container" ref={arrowRef}>
          <img src="https://www.uni.cards/images/down_arrow.svg" alt="arrow" />
        </div>
      </div>
        <FixedBottom style={{
          position: 'fixed',
          left: 0, 
          bottom: 0,
          width: '100%',
          zIndex: 1000,
          padding: '10px',
          backgroundColor: 'rgb(245, 245, 245)',
          textAlign: 'center',
          opacity
        }}
        />
      
    </>
  );
}

export default AnimatedText;

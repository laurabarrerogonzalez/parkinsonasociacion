import React, { useState, useEffect } from 'react';
import '../ScrollArrow/ScrollArrow.css';

const ScrollArrow = () => {
    const [showScroll, setShowScroll] = useState(false);
  
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', checkScrollTop);
      return () => {
        window.removeEventListener('scroll', checkScrollTop);
      };
    }, [showScroll]);
  
    const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    return (
      <div className="scroll-to-top">
        {showScroll && (
          <button onClick={scrollTop}>
            <i className="fas fa-arrow-up"></i>
          </button>
        )}
      </div>
    );
  };
  
  export default ScrollArrow;
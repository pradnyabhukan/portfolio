import React, { useRef, useEffect } from 'react';
import './Timeline.css';

const Timeline = () => {
  const arrowRef = useRef(null);

  useEffect(() => {
    const arrowElement = arrowRef.current;

    arrowElement.classList.add('arrow-stretch');

    return () => {
      arrowElement.classList.remove('arrow-stretch');
    };
  }, []);

  return (
    <div className="timeline-container">
      <div ref={arrowRef} className="arrow">
        <div className='line-container'>
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
        <div className="line line-4"></div>
        </div>
        
      </div>
      {/* Add your personal experience content here */}
    </div>
  );
};

export default Timeline;

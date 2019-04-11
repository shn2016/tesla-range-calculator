import React from 'react';

const SpeedControl = ({ 
  selectedSpeed,
  onControlButtonClick,
}) => (
  <div className="speed-control">
    <p>Speed</p>
    <div className="option-container">
      <p>{selectedSpeed} <sup>MPH</sup></p>
      <div className="option-button-container">
        <button className="increase" onClick={() => onControlButtonClick('speed', 'increase')}></button>
        <button className="decrease" onClick={() => onControlButtonClick('speed', 'decrease')}></button>
      </div>
    </div>
  </div>
)

export default SpeedControl;
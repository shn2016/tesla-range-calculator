import React from 'react';

const SpeedControl = ({ 
  speed,
  onSpeedChange,
}) => (
  <div className="speed-control">
    <p>Speed</p>
    <div className="option-container">
      <p>{speed} <sup>MPH</sup></p>
      <div className="option-button-container">
        <button 
          className="increase" 
          onClick={() => onSpeedChange('increase', speed)}
        >
        </button>
        <button 
          className="decrease" 
          onClick={() => onSpeedChange('decrease', speed)}
        >
        </button>
      </div>
    </div>
  </div>
)

export default SpeedControl;
import React from 'react';

const SpeedControl = ({ 
  selectedSpeed,
  onIncreaseButtonClick,
  onDecreaseButtonClick,
}) => (
  <div className='speed-control'>
    <p>Speed</p>
    <div className='option-container'>
      <p>{selectedSpeed} <sup>MPH</sup></p>
      <div className='option-button-container'>
        <button className='increase' onClick={() => onIncreaseButtonClick('speed')}></button>
        <button onClick={() => onDecreaseButtonClick('speed')}></button>
      </div>
    </div>
  </div>
)

export default SpeedControl;
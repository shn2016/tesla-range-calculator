import React from 'react';

const TemperatureControl = ({ 
  selectedTemperature,
  onIncreaseButtonClick,
  onDecreaseButtonClick,
}) => (
  <div className='temperature-control'>
    <p>Outside Temperature</p>
    <div className='option-container'>
      <p>{selectedTemperature} <sup>°</sup></p>
      <div className='option-button-container'>
        <button className='increase' onClick={() => onIncreaseButtonClick('temperature')}></button>
        <button onClick={() => onDecreaseButtonClick('temperature')}></button>
      </div>
    </div>
  </div>
)

export default TemperatureControl;
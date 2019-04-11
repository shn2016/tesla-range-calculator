import React from 'react';

const TemperatureControl = ({ 
  selectedTemperature,
  onControlButtonClick,
}) => (
  <div className="temperature-control">
    <p>Outside Temperature</p>
    <div className="option-container">
      <p>{selectedTemperature} <sup>°</sup></p>
      <div className="option-button-container">
        <button 
          className="increase" 
          onClick={() => onControlButtonClick('temperature', 'increase')}
          type="button"
        ></button>
        <button 
          className="decrease" 
          onClick={() => onControlButtonClick('temperature', 'decrease')}
          type="button"
        >
        </button>
      </div>
    </div>
  </div>
);

export default TemperatureControl;
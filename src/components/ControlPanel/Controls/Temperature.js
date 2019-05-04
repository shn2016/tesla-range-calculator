import React from 'react';

const Temperature = ({ 
  temperature,
  onChange,
}) => (
  <div className="temperature-control">
    <p>Outside Temperature</p>
    <div className="option-container">
      <p>{temperature} <sup>°</sup></p>
      <div className="option-button-container">
        <button 
          className="increase" 
          onClick={() => onChange('increase', temperature)}
        ></button>
        <button 
          className="decrease" 
          onClick={() => onChange('decrease', temperature)}
        >
        </button>
      </div>
    </div>
  </div>
);

export default Temperature;
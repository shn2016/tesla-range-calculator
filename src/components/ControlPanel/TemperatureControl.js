import React from 'react';

const TemperatureControl = () => (
  <div className='temperature-control'>
    <p>Outside Temperature</p>
    <div className='option-container'>
      <p>10 <sup>°</sup></p>
      <div className='option-button-container'>
        <button></button>
        <button></button>
      </div>
    </div>
  </div>
)

export default TemperatureControl;
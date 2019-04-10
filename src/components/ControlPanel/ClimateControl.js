import React from 'react';

const ClimateControl = ({ 
  mode,
  selectedClimate,
  onClimateButtonClick,
}) => (
  <div className='climate-control'>
    <button 
      className={`climate-button ac on`} 
      type='button'
      onClick={() => onClimateButtonClick()}
    >
      <p>{mode} {selectedClimate}</p>
      <div className='climate-icon'></div>
    </button>
  </div>
)

export default ClimateControl;
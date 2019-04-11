import React from 'react';

const ClimateControl = ({ 
  mode,
  selectedClimate,
  onClimateButtonClick,
}) => (
  <div className='climate-control'>
    <button 
      className={`climate-button ${mode} ${selectedClimate}`} 
      type='button'
      onClick={() => onClimateButtonClick()}
    >
      <p>{`${mode} ${selectedClimate}`}</p>
      <div className={`climate-icon ${mode} ${selectedClimate}`}></div>
    </button>
  </div>
)

export default ClimateControl;
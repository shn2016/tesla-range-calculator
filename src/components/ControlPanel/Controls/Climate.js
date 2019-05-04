import React from 'react';

const ClimateControl = ({ 
  mode,
  status,
  onClimateButtonClick,
}) => (
  <div className='climate-control'>
    <button 
      className={`climate-button ${mode} ${status}`} 
      type='button'
      onClick={() => onClimateButtonClick(status)}
    >
      <p>{`${mode} ${status}`}</p>
      <div className={`climate-icon ${mode} ${status}`}></div>
    </button>
  </div>
)

export default ClimateControl;
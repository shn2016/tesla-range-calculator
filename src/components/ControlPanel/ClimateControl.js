import React from 'react';

const ClimateControl = () => (
  <div className='climate-control'>
    <button className={`climate-button ac on`} type='button'>
      <p>Heat on</p>
      <div className='climate-icon'></div>
    </button>
  </div>
)

export default ClimateControl;
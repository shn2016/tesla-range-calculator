import React from 'react';
import './DisplayPanel.css';

const DisplayPanel = ({ ranges }) => (
  <div className='display-panel'>
    {Object.keys(ranges).map(model => {
      return (
        <div key={model}>
          <div className={`model-icon model-${model}`}></div>
          <p>{ranges[model]} <sup>MI</sup></p>
        </div>
      )
    })}
  </div>
);

export default DisplayPanel;
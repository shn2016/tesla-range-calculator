import React from 'react';
import './DisplayPanel.css';
import getRangeByModel from '../../services/getRanges';

const DisplayPanel = ({ models, selectedOptions }) => (
  <div className='display-panel'>
    {models.map(model => {
      return (
        <div key={model}>
          <div className={`model-icon model-${model}`}></div>
          <p>{getRangeByModel(selectedOptions, model)} <sup>MI</sup></p>
        </div>
      )
    })}
  </div>
)

export default DisplayPanel;
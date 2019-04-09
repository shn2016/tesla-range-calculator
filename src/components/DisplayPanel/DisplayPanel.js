import React from 'react';
import './DisplayPanel.css';

const data = [  
  '60',
  '60D',
  '75',
  '75D',
  '90D',
  'P100D',
]

const DisplayPanel = () => (
  <div className='display-panel'>
    {data.map(model => {
      return (
        <div key={model}>
          <div className={`model-icon model-${model}`}></div>
          <p>200 <sup>MI</sup></p>
        </div>
      )
    })}
  </div>
)

export default DisplayPanel;
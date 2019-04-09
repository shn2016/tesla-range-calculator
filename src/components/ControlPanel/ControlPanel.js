import React from 'react';
import ClimateControl from './ClimateControl';
import TemperatureControl from './TemperatureControl';
import WheelControl from './WheelControl';
import SpeedControl from './SpeedControl';
import './ControlPanel.css';

const ControlPanel = () => (
  <div className='control-panel'>
    <SpeedControl />
    <TemperatureControl />
    <ClimateControl />
    <WheelControl />
  </div>
)

export default ControlPanel;
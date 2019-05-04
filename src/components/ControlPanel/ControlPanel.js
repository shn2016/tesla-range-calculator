import React from 'react';
import Wheel from '../../containers/Wheel';
import Climate from '../../containers/Climate';
import Speed from '../../containers/Speed';
import Temperature from '../../containers/Temperature';
import './ControlPanel.css';


const ControlPanel = () => (
  <div className='control-panel'>
    <Speed />
    <Temperature />
    <Climate />
    <Wheel />
  </div>
);
  
export default ControlPanel;
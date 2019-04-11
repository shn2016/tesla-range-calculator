import React from 'react';
import ClimateControl from './ClimateControl';
import TemperatureControl from './TemperatureControl';
import WheelControl from './WheelControl';
import SpeedControl from './SpeedControl';
import temperature from '../../data/temperature';
import speed from '../../data/speed';
import './ControlPanel.css';

class ControlPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      climateMode: 'AC',
    }

    this.onClimateButtonClick = this.onClimateButtonClick.bind(this);
    this.onSmallWheelClick = this.onSmallWheelClick.bind(this);
    this.onLargeWheelClick = this.onLargeWheelClick.bind(this);
    this.onControlButtonClick = this.onControlButtonClick.bind(this);
  }

  updateClimateMode() {
    const { selectedOptions } = this.props;
    const newClimateMode = (selectedOptions.temperature>=20) ? 'AC' : 'HEAT';
    this.setState({
      climateMode: newClimateMode,
    });
  }

  onClimateButtonClick() {
    const { selectedOptions, updateOptions } = this.props;
    selectedOptions.climateButton = (selectedOptions.climateButton==='on')? 'off' : 'on';
    updateOptions(selectedOptions);
  }

  onSmallWheelClick() {
    const { selectedOptions, updateOptions } = this.props;
    selectedOptions.wheel = 19;
    updateOptions(selectedOptions);
  }

  onLargeWheelClick() {
    const { selectedOptions, updateOptions } = this.props;
    selectedOptions.wheel = 21;
    updateOptions(selectedOptions);
  }

  onControlButtonClick(container, control ) {
    const { selectedOptions, updateOptions } = this.props;
    const dataset = (container==='speed')? speed : temperature;
    const index = dataset.indexOf(selectedOptions[container]);

    if (control === 'decrease') {
      if (index===0) return;
      selectedOptions[container] = dataset[index-1];
    }
    if (control === 'increase') {
      if (index===(dataset.length-1)) return;
      selectedOptions[container] = dataset[index+1];
    }

    updateOptions(selectedOptions);
    this.updateClimateMode();
  }

  render() {
    const { selectedOptions } = this.props;
    const { climateMode } = this.state;
    
    return (
      <div className='control-panel'>
        <SpeedControl 
          selectedSpeed={selectedOptions.speed}
          onControlButtonClick={this.onControlButtonClick}
        />
        <TemperatureControl 
          selectedTemperature={selectedOptions.temperature}
          onControlButtonClick={this.onControlButtonClick}
        />
        <ClimateControl 
          mode={climateMode} 
          selectedClimate={selectedOptions.climateButton}
          onClimateButtonClick={this.onClimateButtonClick}
        />
        <WheelControl 
          selectedWheel={selectedOptions.wheel}
          onSmallWheelClick={this.onSmallWheelClick}
          onLargeWheelClick={this.onLargeWheelClick}
        />
      </div>
  )}
}
export default ControlPanel;
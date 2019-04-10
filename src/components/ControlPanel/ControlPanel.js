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
      climateMode: '',
    }

    this.onClimateButtonClick = this.onClimateButtonClick.bind(this);
    this.onSmallWheelClick = this.onSmallWheelClick.bind(this);
    this.onLargeWheelClick = this.onLargeWheelClick.bind(this);
    this.onIncreaseButtonClick = this.onIncreaseButtonClick.bind(this);
    this.onDecreaseButtonClick = this.onDecreaseButtonClick.bind(this);
  }

  componentWillMount() {
    const { selectedOptions } = this.props;
    const newClimateMode = (selectedOptions.temperature>=20) ? 'AC' : 'HEAT';
    this.setState({
      climateMode: newClimateMode,
    });
  }

  onClimateButtonClick() {
    const { selectedOptions, updateOptions } = this.props;
    selectedOptions.climate = (selectedOptions.climate==='on')? 'off' : 'on';
    updateOptions(selectedOptions);
  }

  onSmallWheelClick() {
    const { selectedOptions, updateOptions } = this.props;
    selectedOptions.wheel = '19';
    updateOptions(selectedOptions);
  }

  onLargeWheelClick() {
    const { selectedOptions, updateOptions } = this.props;
    selectedOptions.wheel = '21';
    updateOptions(selectedOptions);
  }

  onDecreaseButtonClick(type) {
    const { selectedOptions, updateOptions } = this.props;
    const dataset = (type==='speed')? speed : temperature;
    const index = dataset.indexOf(selectedOptions[type]);
    if (index===0) return;
    selectedOptions[type] = dataset[index-1];
    updateOptions(selectedOptions);
  }

  onIncreaseButtonClick(type) {
    const { selectedOptions, updateOptions } = this.props;
    const dataset = (type==='speed')? speed : temperature;
    const index = dataset.indexOf(selectedOptions[type]);
    if (index===(dataset.length-1)) return;
    selectedOptions[type] = dataset[index+1];
    updateOptions(selectedOptions);
  }

  render() {
    const { selectedOptions } = this.props;
    const { climateMode } = this.state;
    
    return (
      <div className='control-panel'>
        <SpeedControl 
          selectedSpeed={selectedOptions.speed}
          onIncreaseButtonClick={this.onIncreaseButtonClick}
          onDecreaseButtonClick={this.onDecreaseButtonClick}
        />
        <TemperatureControl 
          selectedTemperature={selectedOptions.temperature}
          onIncreaseButtonClick={this.onIncreaseButtonClick}
          onDecreaseButtonClick={this.onDecreaseButtonClick}
        />
        <ClimateControl 
          mode={climateMode} 
          selectedClimate={selectedOptions.climate}
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
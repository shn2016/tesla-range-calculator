import models from './data/model';
import speed from './data/speed';
import temperature from './data/temperature';
import wheel from './data/wheel';
import climate from './data/climate';
import Header from './components/Header.js';
import Car from './components/Car.js';
import Speed from './components/Speed.js';
import Wheels from './components/Wheels.js';
import TemperaTue from './components/Temperatue.js';
import Climate from './components/Climate.js';
import Models from './components/Models.js';
import BaseComponent from '../base/baseComponent';


class Calculator extends BaseComponent{
  constructor(){
    super();
    const selectedOptions = {
      speed: '55',
      temperature: '20',
      wheel: '19',
      climate: 'on',
    }

    this.state = {
      models,
      speed,
      temperature,
      wheel,
      climate,
      selectedOptions,

    }
    this.render();
  }

  render(){
    const rootElement = document.createElement('div');

    const header = Header();

    const body = document.createElement('div');

    const carContainer = Car();
    const modelRange = Models(this.state);

    const optionsContainer = document.createElement('div');
    const speedContainer = Speed(this.state);
    const outsideTemperatureContainer = TemperaTue(this.state);
    const climateContainer = Climate(this.state);
    const wheelContainer = Wheels(this.state);

    optionsContainer.append(speedContainer, outsideTemperatureContainer, climateContainer, wheelContainer)
    body.append(carContainer, modelRange, optionsContainer);
    rootElement.append(header, body);

    return rootElement;
  }
}
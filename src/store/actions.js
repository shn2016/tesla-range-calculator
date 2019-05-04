import C from './constants';
import speedData from '../data/speed';
import temperatureData from '../data/temperature';
import getModelRanges from '../services/getRanges';

const max = (data, collection) => {
  const index = collection.indexOf(data);
  return (index === collection.length - 1) ? true : false;
};

const min = (data, collection) => {
  const index = collection.indexOf(data);
  return (index === 0) ? true : false;
};

const increment = (data, collection) => {
  return collection[collection.indexOf(data)+1];
};

const decrement = (data, collection) => {
  return collection[collection.indexOf(data)-1];
};

export const changeSpeed = (type, speed) => (
  (type === 'increase') ?
    ({
      type: C.Change_Speed,
      payload: (max(speed, speedData)) ? speed : increment(speed, speedData),
    })   
    :
    ({
      type: C.Change_Speed,
      payload: (min(speed, speedData)) ? speed : decrement(speed, speedData),
    })
);

export const changeTemperature = (type, temperature) => (
  (type === 'increase') ?
    ({
      type: C.Change_Temperature,
      payload: (max(temperature, temperatureData)) ? temperature : increment(temperature, temperatureData),
    })
    :
    ({
      type: C.Change_Temperature,
      payload: (min(temperature, temperatureData)) ? temperature : decrement(temperature, temperatureData),
    })
);

export const changeWheel = size => ({
  type: C.Change_Wheel,
  payload: size,
});

export const  clickClimate = status => ({
  type: C.Click_Climate,
  payload: (status === 'on') ? 'off' : 'on',
})

export const  getRanges = () => (dispatch, getState) => {
  const { speed, temperature, wheel, climateButton, ranges } = getState();
  const models = Object.keys(ranges);
  const newRange = Object.assign({}, ranges)
  for(let model of models) {
    newRange[model] = getModelRanges({
      speed, temperature, wheel, climateButton
    }, model)
  };
  dispatch({
    type: C.Get_Ranges,
    payload: newRange,
  });
};
  
import C from './constants';
import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'


export const climateButton = (state='on', action) => (
  (action.type === C.Click_Climate) ? 
    action.payload :
    state
);

export const speed = (state=55, action) => (
  (action.type === C.Change_Speed) ?
    action.payload :
    state
);

export const temperature = (state='20', action) => (
  (action.type === C.Change_Temperature) ?
    action.payload :
    state
);

export const climateMode = (state='AC', action) => (
  (action.type === C.Change_Temperature) ?
    (parseInt(action.payload) >= 20 ? 
      'AC' :
      'HEAT')  :
    state
);

export const wheel = (state=19, action) => (
  (action.type === C.Change_Wheel) ?
    action.payload :
    state
);

export const ranges = (state={}, action) => (
  (action.type === C.Get_Ranges) ?
    action.payload :
    state
);


const appReducer = combineReducers({
  climateButton,
  climateMode,
  temperature,
  speed,
  wheel,
  ranges,
});

export default (initialState={}) => {
	return applyMiddleware(thunk)(createStore)(appReducer, initialState)
}
import modelData from '../data/modelData'

export default function getRanges(selectedOptions, model){
  // console.log(selectedOptions);
  const range = modelData[model][selectedOptions.wheel][selectedOptions.climateButton]['speed'][selectedOptions.speed][selectedOptions.temperature];
  
  return range;
}
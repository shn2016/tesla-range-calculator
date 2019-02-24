import modelData from '../data/modelData'

export default function getRanges(selectedOptions, model){
  const range = modelData[model][selectedOptions.wheel][selectedOptions.climate]["speed"][selectedOptions.speed][selectedOptions.temperature];

  return range;
}
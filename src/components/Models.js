import getRanges from '../helper/getRanges';

export default function Speed({selectedOptions, models}){

  const rootElement = document.createElement('div');

  models.forEach(model => {
    const modelContainer = document.createElement('div');
    const modelImage = document.createElement('img');
    modelImage.classList.add("model-"+model);

    const rangeContainer = document.createElement('div');
    const range = document.createElement('span');
    range = getRanges(selectedOptions, model)
    const unit = document.createElement('span');
    unit.innerHTML = 'MI';

    rangeContainer.append(range, unit);
    modelContainer.append(modelImage, rangeContainer);
    rootElement.append(modelContainer);
  });
 
  return rootElement;
}
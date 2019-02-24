export default function Wheels(){
  const rootElement = document.createElement('div');
  rootElement.classList.add('counter')
  const title = document.createElement('p');
  title.innerHTML='Wheels';
  
  const boxContainer = document.createElement('div');

  const firstBox = document.createElement('div');
  const secondBox = document.createElement('div');

  const firstValue = document.createElement('p');
  firstValue.innerHTML='19' + '°' ;
  const firstWheelImage = document.createElement('img');
  firstBox.append(firstWheelImage, firstValue);
  
  const secondValue = document.createElement('p');
  secondValue.innerHTML='speedValue' +'°';
  const secondWheelImage = document.createElement('img');
  secondBox.append(secondWheelImage, secondValue);

  boxContainer.append(firstBox, secondBox);

  rootElement.append(title, box);
  return rootElement;
}
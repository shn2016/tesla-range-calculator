export default function Speed(){
  const rootElement = document.createElement('div');
  rootElement.classList.add('counter')
  const title = document.createElement('p');
  title.innerHTML='Speed';
  const box = document.createElement('div');

  const speedValue = document.createElement('p');
  speedValue.innerHTML='speedValue' + 'MPH';
  
  const buttonContainer = document.createElement('div');
  const addButton = document.createElement('div');
  addButton.onclick = () =>{
    onAddButtonClicked();
  }
  const minusButton = document.createElement('div');
  minusButton.onclick = () =>{
    onMinusButtonClicked();
  }
  
  buttonContainer.append(addButton, minusButton);
  box.append(speedValue, buttonContainer);

  rootElement.append(title, box);
  return rootElement;
}
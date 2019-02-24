export default function Speed(){
  const rootElement = document.createElement('div');
  rootElement.classList.add('counter')
  const title = document.createElement('p');
  title.innerHTML='Outside Temperature';
  const box = document.createElement('div');

  const temperatureValue = document.createElement('p');
  temperatureValue.innerHTML='temperatureValue' + ' °';

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
  box.append(temperatureValue, buttonContainer);

  rootElement.append(title, box);
  return rootElement;
}
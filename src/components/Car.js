export default function Car(){

  const rootElement = document.createElement('div');
  rootElement.classList.add('car-container');

  const h1 = document.createElement('h1');
  h1.innerHTML = 'Range Per Charge';

  const carHolder = document.createElement('div');
  carHolder.classList.add('tesla-car');
  // To Do: based on state to change css background image
  const leftWheel = document.createElement('div');
  const rightWheel = document.createElement('div');
  leftWheel.classList.add('tesla-wheel');
  rightWheel.classList.add('tesla-wheel');

  carHolder.append(leftWheel, rightWheel);

  rootElement.append(h1, carHolder);

  return rootElement;
}
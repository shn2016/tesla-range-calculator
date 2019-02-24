import Calculator from './components/Calculator';
import './styles/app.css'
import clearNode from './helper/clearNode';
function main() {
  const calculator = new Calculator();
  
  const appContainer = document.querySelector('#app');
  clearNode(appContainer);
  calculator.enhancedRender(appContainer);
}

document.addEventListener('DOMContentLoaded', main);

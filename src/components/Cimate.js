export default function Climate(){
  const rootElement = document.createElement('div');
  rootElement.classList.add('climate-holder')

  rootElement.onclick = () => {
    onClimateChanged();
  }
  const climateP = document.createElement('p');
  climateP.innerHTML = 'ac on';
  const icon = document.createElement('img');
  icon.classList.add('test');

  rootElement.append(climateP, icon);
  return rootElement;
}
export default function Header(){

  const rootElement = document.createElement('header');
  const image = document.createElement('img');
  image.src = '../assets/tesla.jpg';
  rootElement.append(image);

  return rootElement;
}
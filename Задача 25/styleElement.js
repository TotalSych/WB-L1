// Создаем функцию которая принимает тип элемента и объект со стилями
function createAndStyleElement(elementType, styles) {
  // Создаем элемент
  const element = document.createElement(elementType);

  // Создаем цикл который определяет свойства стиля
  for (const property in styles) {
    if (styles.hasOwnProperty(property)) {
      element.style[property] = styles[property];
    }
  }

  document.body.appendChild(element);
  return element;
}

const divStyle = {
  backgroundColor: "darkcyan",
  padding: "10px",
  borderRadius: "5px",
  border: "3px solid black",
};

const spanStyle = {
  backgroundColor: "antiquewhite",
  color: "firebrick",
  content: "Paragraph",
  height: "20px",
};

createAndStyleElement("div", divStyle);
createAndStyleElement("div", spanStyle);

function traverseDOM(element, action) {
  if (element === null) {
    return;
  }

  // Выполняем указанное действие с текущим элементом
  action(element);

  // Переходим к первому дочернему элементу
  element = element.firstElementChild;

  while (element) {
    // Рекурсивно вызываем функцию для каждого дочернего элемента
    traverseDOM(element, action);
    // Переходим к следующему соседнему элементу
    element = element.nextElementSibling;
  }
}

// Для проверки функции создаем действие для аргумента action и переменную для аргумента element
function logTagName(element) {
  console.log(element.tagName);
}
const list = document.getElementById("list");
traverseDOM(list, logTagName);

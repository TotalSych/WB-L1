// Создаем функцию которая в качестве аргументов принимает id элемента template и родительский контейнер, в который должен быть добавлен клон темплейта
function createElementFromTemplate(templateId, parentNodeSelector) {
  const template = document.getElementById(templateId);

  // Добавляем проверку на наличие темплейта
  if (!template) {
    console.error(`Шаблон с id "${templateId}" не найден`);
    return;
  }

  // Клонируем темплейт
  const clone = template.content.cloneNode(true);
  const parentNode = document.querySelector(parentNodeSelector);

  // Добавляем проверку получилось ли найти родительский элемент
  if (!parentNode) {
    console.error(
      `Родительский элемент с селектором "${parentNodeSelector}" не найден`
    );
    return;
  }

  // Добавляем клон в родительский элемент
  parentNode.appendChild(clone);
}

createElementFromTemplate("item-template", "#container");

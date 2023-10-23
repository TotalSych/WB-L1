// Разработайте функцию преобразования JSON в связный список. На входе функция должна получать JSON, содержащий список объектов, на выходе объект, представляющий из себя односвязный список.

function jsonToLinkedList(json) {
  // Проверяем если аргумент не является json или если его длина = 0
  if (!json || json.length === 0) {
    return null;
  }

  // Преобразуем JSON в массив объектов
  const objectsArr = JSON.parse(json);

  // Создаем первый узел списка
  const head = {
    data: objectsArr[0],
    next: null,
  };
  let current = head;

  // Создаем остальные узлы списка
  for (let i = 1; i < objectsArr.length; i++) {
    const newNode = {
      data: objectsArr[i],
      next: null,
    };
    current.next = newNode;
    current = newNode;
  }

  return head;
}

const json =
  '[{"name": "Alice"}, {"name": "Mark"}, {"name": "Bob"}, {"name": "Charlie"}, {"name": "David"}]';
console.log(jsonToLinkedList(json));

// Реализовать функцию конвертации JSON в строку

// Создаем функцию прпнимающую JSON
function jsonToString(json) {
  if (typeof json !== "object" || json === null) {
    // Если json не является объектом или равен null, преобразуем его в строку и возвращаем
    return String(json);
  }
  // Задаем переменную result в которую будем добавлять элементы объекта и оборачиваем результат в фигурные скобки для удобной конвертации обратно в JSON
  let result = "{";
  // Создаем переменную для ключей чтобы использовать её в цикле
  const keys = Object.keys(json);

  // Создаем цикл в котором каждый функция рекурсивно преобразует каждый элемент в строку
  for (let i = 0; i < keys.length; i++) {
    // Переменная для ключей
    const key = keys[i];
    // Переменная для значения ключа
    const value = json[key];

    // Складыаем ключ и значение
    result += `"${key}": ${
      // Проверяем является ли значение объектом. Если да, то рекурсивно вызываем функцию
      typeof value === "object" ? jsonToString(value) : `"${value}"`
    }`;

    // Добавляем запятую после каждого цикла кроме последнего
    if (i !== keys.length - 1) {
      result += ", ";
    }
  }

  result += "}";
  return result;
}

const jsonObject = {
  name: "Alex",
  surname: "Cooper",
  age: 27,
  profession: "front-end developer",
  location: { country: "Russia", city: "Moscow" },
};
console.log(jsonToString(jsonObject)); // {"name": "Alex", "surname": "Cooper", "age": "27", "profession": "front-end developer", "location": {"country": "Russia", "city": "Moscow"}}

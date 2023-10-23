// Реализовать функцию конвертации строки в JSON со всеми необходимыми проверками и валидациями.

// Создаем функцию принимающую строку
function stringToJson(str) {
  // Используем try catch чтобы отслеживать возможные ошибки
  try {
    const json = new Function("return " + str)();
    if (typeof json === "object" && json !== null) {
      return json;
    } else {
      console.error("Входная строка не является JSON объектом.");
      return null;
    }
  } catch (error) {
    console.error("Произошла ошибка при преобразовании строки в JSON:", error);
    return null;
  }
}

const string =
  '{"name": "John" "surname": "Cooper", "age": 25, "profession": "front-end developer", "location": {"country": "Russia", "city": "Moscow"}}';
console.log(stringToJson(string));
console.log(JSON.parse(string));

// {"name": "Alex", "surname": "Cooper", "age": "27", "profession": "front-end developer", "location": {"country": "Russia", "city": "Moscow"}}

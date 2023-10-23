// Задача о сортировке объектов: у вас есть массив объектов вида { name: 'John', age: 25 }. Напишите код, который сортирует этот массив по возрастанию 	возраста, а при равных возрастах сортирует по алфавиту по полю name.

const arr = [
  { name: "John", age: 25 },
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Chris", age: 25 },
  { name: "Mike", age: 30 },
  { name: "Angela", age: 30 },
];

arr.sort((a, b) => {
  // Проверяем одинаковый ли возраст
  if (a.age !== b.age) {
    // Сортировка по возрастанию возраста
    return a.age - b.age;
  } else {
    // Сортировка по алфавиту
    return a.name.localeCompare(b.name);
  }
});

console.log(arr);

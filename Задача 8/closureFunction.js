// Задача о замыканиях: напишите функцию, которая будет принимать массив функций и возвращать новую функцию, которая вызывает каждую функцию в этом массиве и возвращает массив результатов, полученных после вызова каждой функции.

// Создаем функцию принимающую массив
function functionsArrResult(arr) {
  return function () {
    // Создаем массив в котором будут храниться результаты функций
    const results = [];
    // Создаем цикл, который запустит каждую функцию
    for (let i = 0; i < arr.length; i++) {
      // Результат каждой функции добавляем в массив с помощью push
      const result = arr[i]();
      results.push(result);
    }
    // Возвращаем массив с результатами всех функций
    return results;
  };
}

const func1 = () => 1;
const func2 = () => 2;
const func3 = () => 3;

const functionsArr = [func1, func2, func3];

console.log(functionsArrResult(functionsArr)());

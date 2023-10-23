// напишите асинхронную функцию, которая использует ключевое слово await для ожидания выполнения других асинхронных операций, и возвращает результат выполнения.

// Создаем асинхронные функции для использования в функции asyncFunction
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Данные";
      resolve(data);
    }, 2000); // Имитируем задержку загрузки данных на 2 секунды
  });
}

function processResult(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const processedResult = data.toUpperCase();
      resolve(processedResult);
    }, 1500); // Имитируем задержку обработки результатов на 1,5 секунды
  });
}

function performAction(result) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const actionResult = `Действие выполнено: ${result}`;
      resolve(actionResult);
    }, 1000); // Имитируем задержку выполнения действия на 1 секунду
  });
}

// Создаем асинхронную функцию
async function asyncFunction() {
  try {
    // Используем await для ожидания выполнения
    const result1 = await fetchData();
    const result2 = await processResult(result1);
    const result3 = await performAction(result2);

    // Возвращаем результат
    return result3;
  } catch (error) {
    console.error("Произошла ошибка:", error);
    throw error;
  }
}

asyncFunction()
  .then((result) => {
    console.log("Результат:", result);
  })
  .catch((error) => {
    console.error("Ошибка:", error);
  });

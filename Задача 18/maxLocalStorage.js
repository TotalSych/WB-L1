function calculateLocalStorageSize() {
  var testData = "a"; // Создаем тестовую строку
  var totalBytes = 0; // Общее количество байт
  var localStorageBytes = 0; // Количество байт, занимаемое localStorage
  var localStorageItems = 0; // Количество элементов в localStorage

  try {
    // Заполняем localStorage до его заполнения
    while (true) {
      localStorage.setItem("testData" + localStorageItems, testData);
      totalBytes += testData.length * 2; // Длина строки * 2 байта (UTF-16)
      localStorageBytes = JSON.stringify(localStorage).length; // Занимаемый localStorage в байтах
      localStorageItems++;
    }
  } catch (e) {
    // Если произошла ошибка записи в localStorage, значит достигнуто максимальное значение
    console.log("Максимальный объем localStorage в байтах:", totalBytes);
    console.log(
      "Максимальный объем localStorage в килобайтах:",
      Math.round(totalBytes / 1024)
    );
    console.log(
      "Максимальный объем localStorage в мегабайтах:",
      Math.round(totalBytes / (1024 * 1024))
    );
  }
}

calculateLocalStorageSize();

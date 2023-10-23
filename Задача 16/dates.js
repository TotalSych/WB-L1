//напишите модуль, который экспортирует функцию для работы с датами. Внутри модуля используйте внешнюю библиотеку Moment.js для удобной работы с датами.

// Функция для форматирования даты
function formatDate(date, format) {
  return moment(date).format(format);
}

// Функция для получения текущей даты
function getCurrentDate() {
  return moment().format("YYYY-MM-DD");
}

console.log(formatDate(new Date(), "2012-09-15"));
console.log(getCurrentDate());

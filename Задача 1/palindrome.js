// Задача о палиндроме: напишите функцию, которая проверяет, является ли заданная строка палиндромом. Палиндром — это строка, которая читается одинаково в обоих направлениях (например, «аргентина манит негра»)

// Решение
function checkPalindrome(string) {
  string = string.toLowerCase().split(" ").join(""); // конвертируем текст в нижний регистр, конвертируем фразу побуквенно в массив, убираем пробелы и с помощью join конвертируем массив в строку
  let stringReversed = string.split(" ").reverse().join(""); // переворачиваем массив
  if (stringReversed == string) {
    console.log(`${string} is a palyndrome!`);
  } else {
    console.log(`${string} is NOT a palyndrome!`);
  }
  console.log(typeof stringReversed);
}

checkPalindrome("Аргентина манит негра");
checkPalindrome("А роза упала на лапу Азора");
checkPalindrome("Не палиндром");

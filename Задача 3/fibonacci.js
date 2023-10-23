// Вычисление N-го числа в ряду Фибоначчи
function fibonacciAt(n) {
  // Создаем переменные для чисел в 1 и 2 позиции
  (a = 0), (b = 0);
  if (n <= 0) return 0;
  // Создаем переменную для активного числа
  let curr = 1;
  for (let i = 1; i < n; i++) {
    // Даем первому числу значение второго
    a = b;
    // Даем второму числу значение активного
    b = curr;
    // Активное число = сумме прошлых двух чисел
    curr = a + b;
  }
  console.log(`The fibonacci number at position ${n} is: ` + curr);
}
fibonacciAt(10);

// Вычисление всех чисел в ряду Фибоначчи до числа N
function fibonacciSum(n) {
  // Создаем переменные для чисел в 1 и 2 позиции + переменная для суммы
  (a = 0), (b = 0), (sum = 1);
  if (n <= 0) sum = 0;
  let curr = 1;
  for (let i = 1; i < n; i++) {
    a = b;
    b = curr;
    curr = a + b;
    // сумма = активное значение + сумма
    sum += curr;
  }
  console.log(`The sum of first ${n} fibonacci numbers is:` + sum);
}
fibonacciSum(10);

// Вычисление N-го просто числа
// Определяем является ли число простым
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  else {
    // Проверяем на что делится число от 2 до значения числа
    for (let i = 2; i < num; i++) {
      // Если число num делится на i и в остатке 0 - возвращаем false, иначе true
      if (num % i === 0) return false;
    }
    return true;
  }
}

// Функция для нахождения n-го простого числа
function findNthPrime(n) {
  let count = 0;
  let num = 2;
  // Проверяем является ли число простым. Если да, то count увелчивается на 1, иначе num увеличивается на 1
  while (count < n) {
    if (isPrime(num)) {
      count++;
    }
    num++;
  }
  // Возвращаем окончательное значение и отнимаем 1
  console.log(`Prime number at position ${n} is: ` + (num - 1));
  return num - 1;
}
findNthPrime(10);

// Вычисление всех простых чисел до числа N
// Создаем массив из простых чисел
function getNprimes(n) {
  const arr = [];
  let i = 2;
  // если число является простым - добавляем его в массив
  while (arr.length < n) {
    if (isPrime(i)) {
      arr.push(i);
    }
    i++;
  }
  return arr;
}
console.log(getNprimes(5)); //[2, 3, 5, 7, 11]

// Складываем все числа в массиве
const sumOfNPrimes = (num) => {
  let sum = getNprimes(num).reduce((a, b) => a + b);
  return sum;
};
console.log(sumOfNPrimes(5)); // 2 + 3 + 5 + 7 + 11 = 28

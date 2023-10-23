// Задача о странных числах: Напишите функцию, которая принимает число и возвращает true, если это число является странным, и false в противном случае. Странным числом считается число, которое равно сумме всех своих делителей, кроме самого себя.

// Решение
const divisors = (n, i = 1, inc = [], dec = []) =>
  i * i > n
    ? [...inc, ...dec.reverse()]
    : n % i == 0
    ? divisors(n, i + 1, [...inc, i], i * i == n ? dec : [...dec, n / i])
    : divisors(n, i + 1, inc, dec);

const powerset = ([x, ...xs]) =>
  x == undefined ? [[]] : powerset(xs).flatMap((ss) => [ss, [x, ...ss]]);

const sum = (ns) => ns.reduce((a, b) => a + b, 0);

const weirdNumber = (n) => {
  const factors = divisors(n);
  return (
    sum(factors) > 2 * n &&
    !powerset(factors.slice(0, -1)).some((ss) => sum(ss) == n)
  );
};

console.log(weirdNumber(70));
console.log(weirdNumber(18));

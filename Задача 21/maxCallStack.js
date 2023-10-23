// Создаем рекурсивную функцию, внутри неё создаем блок try catch
function calculateStackSize() {
  try {
    return 1 + calculateStackSize();
    // При достижении лимита кол стека сработает catch и остановит функцию
  } catch (err) {
    return 0;
  }
}

const stackSize = calculateStackSize();
console.log("Размер колл стека:", stackSize);
// Chrome: 11414
// Firefox: 34445
// Opera: 11411

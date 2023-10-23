function addAnimation(elementId, duration) {
  const element = document.getElementById(elementId);
  element.style.transition = `width ${duration}s, height ${duration}s`; // Устанавливаем переходы для свойств width и height с указанной продолжительностью
  element.style.width = "300px"; // Изменяем ширину элемента на 300px
  element.style.height = "300px"; // Изменяем высоту элемента на 300px
}

const container = document.getElementById("container");

// При нажатии на бежевый контейнер его ширина уменьшится
container.addEventListener("click", () => {
  addAnimation("container", 3);
});

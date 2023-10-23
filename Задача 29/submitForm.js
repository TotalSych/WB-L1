// Создаем переменные для инпутов и кнопки submit
const inputName = document.getElementById("input-name");
const inputEmail = document.getElementById("input-email");
const submitButton = document.getElementById("submit-btn");

// Добавляем event listener на кнопку. При нажатии выскакивает окно alert с данными инпутов
submitButton.addEventListener("click", () => {
  alert(`Имя: ${inputName.value}, E-mail: ${inputEmail.value}`);
});

// Функция для создания задержки в выполнении функции
function debounce(func, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
}

// Функция для получения списка адресов по введенному значению
function geocode() {
  const input = document.getElementById("address-input");

  const geocoder = ymaps.geocode(input.value);
  geocoder.then((res) => {
    const addresses = [];
    res.geoObjects.each((obj) => {
      addresses.push(obj.getAddressLine());
    });
    displayAddresses(addresses);
  });
}

// Функция для отображения найденных адресов
function displayAddresses(addresses) {
  const list = document.getElementById("address-list");
  list.innerHTML = "";

  // Создаем цикл в котором каждый адрес добавляется в список
  addresses.forEach((address) => {
    const option = document.createElement("li");
    option.className = "address-option";
    option.textContent = address;
    // При клике адрес из списка становится активным адресом в поле ввода
    option.onclick = function () {
      document.getElementById("address-input").value = address;
      list.style.display = "none";
    };

    list.appendChild(option);
  });

  if (addresses.length > 0) {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
}

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    center: [55.76, 37.64],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 9,
  });
}

// Инициализация карты Яндекс
ymaps.ready(() => {
  const input = document.getElementById("address-input");
  const debouncedGeocode = debounce(geocode, 300);

  input.addEventListener("input", debouncedGeocode);
});

const url =
  "http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true";
const tableBody = document.querySelector("#data-table tbody");
const pagination = document.querySelector("#pagination");
const pageSize = 50;
let currentPage = 1;
let data = [];

// Функция для загрузки данных с сервера
function loadData() {
  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => {
      data = jsonData;
      displayData(getCurrentPageData());
      renderPagination(data.length);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Функция для отображения данных в таблице
function displayData(data) {
  tableBody.innerHTML = "";

  data.forEach((obj) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = obj.fname;
    row.appendChild(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = obj.lname;
    row.appendChild(lastNameCell);

    const phoneCell = document.createElement("td");
    phoneCell.textContent = obj.tel;
    row.appendChild(phoneCell);

    const addressCell = document.createElement("td");
    addressCell.textContent = obj.address;
    row.appendChild(addressCell);

    const cityCell = document.createElement("td");
    cityCell.textContent = obj.city;
    row.appendChild(cityCell);

    const stateCell = document.createElement("td");
    stateCell.textContent = obj.state;
    row.appendChild(stateCell);

    const zipCell = document.createElement("td");
    zipCell.textContent = obj.zip;
    row.appendChild(zipCell);

    tableBody.appendChild(row);
  });
}

// Функция для получения текущей страницы данных
function getCurrentPageData() {
  const start = (currentPage - 1) * pageSize;
  const end = currentPage * pageSize;
  return data.slice(start, end);
}

// Функция для отрисовки пагинации
function renderPagination(totalData) {
  const totalPages = Math.ceil(totalData / pageSize);

  pagination.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const pageLink = document.createElement("span");
    pageLink.className = `page-link ${i === currentPage ? "active" : ""}`;
    pageLink.textContent = i;

    pageLink.addEventListener("click", () => {
      currentPage = i;
      displayData(getCurrentPageData());
    });

    pagination.appendChild(pageLink);
  }
}

// Функция для сортировки таблицы // Нужно доработать
// function sortTable(column) {
//   const headers = document.querySelectorAll("#data-table th");
//   let sortDirection = 1;

//   if (headers[column].classList.contains("sorted")) {
//     sortDirection = -1;
//     headers[column].classList.remove("sorted");
//   } else {
//     headers.forEach((header) => header.classList.remove("sorted"));
//     headers[column].classList.add("sorted");
//   }

//   const sortedData = getCurrentPageData().sort((a, b) => {
//     const valueA = a[column];
//     const valueB = b[column];

//     if (typeof valueA === "string" && typeof valueB === "string") {
//       return valueA.localeCompare(valueB) * sortDirection;
//     } else if (typeof valueA === "number" && typeof valueB === "number") {
//       return (valueA - valueB) * sortDirection;
//     }
//   });

//   displayData(sortedData);
// }

// Загрузка данных при загрузке страницы
window.addEventListener("load", loadData);

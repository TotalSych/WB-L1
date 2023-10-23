// Создайте объект, представляющий собой книгу. Объект должен иметь свойства, такие как: название книги, автор и год издания. Напишите методы для получения и изменения значений свойств книги.

// Создаем объект
const book = {
  name: "At the Mountains of Madness",
  author: "Howard Phillips Lovecraft",
  year: 1936,
  pages: 184,

  // Метод для получения названия книги
  getName: function () {
    return this.name;
  },

  // Метод для изменения изменения названия книги
  setName: function (newName) {
    this.name = newName;
  },

  // Метод для получения имени автора
  getAuthor: function () {
    return this.author;
  },

  // Метод для изменения изменения автора
  setAuthor: function (newAuthor) {
    this.author = newAuthor;
  },

  // Метод для получения года выхода книги
  getYear: function () {
    return this.year;
  },

  // Метод для изменения года выхода книги
  setYear: function (newYear) {
    this.year = newYear;
  },

  // Метод для получения количества страниц
  getPages: function () {
    return this.pages;
  },

  // Метод для изменения количества страниц
  setPages: function (newPages) {
    this.pages = newPages;
  },
};

console.log(book); //{ "name": "At the Mountains of Madness", "author": "Howard Phillips Lovecraft", "year": 1936, "pages": 184 }

// Поменяем значения свойств объекта
book.setName(`Generation "П"`);
book.setAuthor("Victor Pelevin");
book.setYear(1999);
book.setPages(352);
console.log(book); // {"name": "Generation \"П\"","author": "Victor Pelevin","year": 1999,"pages": 352 }

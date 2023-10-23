let counter = 0;

function testDocumentWrite() {
  try {
    document.write("");
    counter++;
    testDocumentWrite();
  } catch (error) {
    console.log("Количество вызовов document.write():", counter);
  }
}

testDocumentWrite(); // 8960
// При вызове document.write() браузер парсит весь документ заново, заменяя старое содержимое страницы на новое.

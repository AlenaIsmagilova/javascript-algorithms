/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
 */

function capitalize(str) {
  if (str === " ") {
    return str;
  }
  const newStr = str.split(" ");
  const newStrFiltered = newStr.filter(function (i) {
    return i.length > 0;
  });
  const res = newStrFiltered.map(function (item) {
    return item[0].toUpperCase() + item.slice(1);
  });
  return res.join(" "); // Напишите код здесь
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize("молодость всё простит")); // "Молодость Всё Простит"

/*
 * Задача 5: «Найти гласные»
 *
 * Напишите функцию findVowels(str), принимающую на вход кириллическую
 * строку str  и возвращающую количество гласных, содержащихся в этой строке.
 * Для вашего удобства вот массив кириллических гласных:
 *
 * ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'].
 *
 */

const vowels = ["а", "я", "о", "ё", "у", "ю", "ы", "и", "э", "е"];

function findVowels(str) {
  const newStr = str.toLowerCase();
  let res = 0;
  vowels.forEach(function (item) {
    if (newStr.includes(item)) {
      res += 1;
    }
  });
  return res;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(findVowels("здравствуй")); // 2
console.log(findVowels("привет")); // 2
console.log(findVowels("хеллоу")); // 3

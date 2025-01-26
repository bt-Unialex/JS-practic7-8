// 1. Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте в кінець 'rock-n-roll'
// Заменіть значення 'blues' на 'classic'
// Напишіть функцію logItems(array), яка приймає
// масив і використовує цикл for, який для кожного елемента
// буде виводити повідомлення у форматі:
// <номер елемента> - <значення елемента>
// Нумерація має починатись з 1

// const styles = ["jazz", "blues"];
// styles.push("rock-n-roll");
// styles[styles.indexOf("blues")] = "classic";
// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }
// logItems(styles);

// 2. Напиши функцію checkLogin(array), яка перебирає масив логінів і перевіряє
// чи є ім'я введене в prompt у цьому масиві і у разі,
// якщо є - виводить повідомлення в alert "Welcome, <name>!"
// в іншому випадку - "User not found"

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//   const name = prompt("Введіть ваше імʼя: ").trim();
//   if (array.includes(name)) {
//     alert(`Welcome, ${name}!`);
//   } else {
//     alert(`User not found`);
//   }
// }

// checkLogin(logins);


// 3. Напишіть функцію, яка складатиме сусідні числа і пушитиме їх в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function sum (array) {
//   const newArray = [];

//   for (let i = 0; i < array.length-1; i++) {

//     const current = array[i];
//     const next = array[i+1];
//     newArray.push(current + next);
//   }
//   return newArray;
// }
//   console.log(sum(someArr));

// 4. Напишіть функцію calculateAverage()
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додати перевірку, що аргументи це числа.

function calculateAverage() {
  let sum = 0;
  let i = 0;
  for (const arg of arguments) {
    if (typeof arg === "number") {
      sum += arg;
      i += 1;
    }
  }
  return sum / i || 0;
}
console.log(calculateAverage("hello"));

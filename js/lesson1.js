// // Запропонуйте користувачу ввести число за допомогою prompt().
// // Збережіть введене значення у змінну number.
// // Перевірте, чи дорівнює змінна number числу 10:
// //    Якщо так – виведіть повідомлення 'Вірно' у alert().
// //    Якщо ні – виведіть 'Невірно'.

// let number = Number(prompt("Input number:"));
// console.log(number);
// // if (number === 10) {
// //   alert("Вірно");
// // } else {
// //   alert("Невірно");
// // }
// alert(number === 10 ? "Вірно" : "Невірно");

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);
// if (min <= 15) {
//     alert(`${min} входить в першу чверть`);
// } else if (min <= 30) {
//     alert(`${min} входить в другу чверть`);
// } else if (min <= 45) {
//     alert(`${min} входить в третю чверть`);
// } else {
//     alert(`${min} входить в четверту чверть`);
// }

// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".

// const num = Number(prompt("1-4"));
// let result = "";
// switch (num) {
//     case 1:
//         result ='зима';
//         break;
//     case 2:
//         result ='весна';
//         break;
//     case 3:
//         result ='літо';
//         break;
//     case 4:
//         result ='осінь';
//         break;
//     default: result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
// }
//     console.log (result);

// function checkNum(num) {
//   switch (num) {
//     case 1:
//      return  "зима";
//     case 2:
//      return  "весна";
//     case 3:
//      return  "літо";
//     case 4:
//      return  "осінь";
//     default:
//      return "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
//   }
// }
//     console.log(checkNum(1));

//3. Напишіть цикл, який виводить в консоль
//числа от max до min по зменьшенню
//Виведіть в консоль суму усіх парних чисел
// * перепиши код на функцію getNumbers(min, max)

// const min = 6;
// const max = 12;
// let sum = 0;

// for (let i = max; i >= min; i--) {
//   console.log(i);

//   if (i % 2 === 0) {
//     sum += i;
//   }
// }

// console.log(`Сума парних чисел: ${sum}`);

// function getNumbers(min, max) {
//   let sum = 0;

//   for (let i = max; i >= min; i--) {
//   console.log(i);

//   if (i % 2 === 0) {
//     sum += i;
//   }
//   }
//   return sum;
// }

// console.log(getNumbers(6, 12));

// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

// function fizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log(i, "fizzbuzz");
//     } else if (i % 3 === 0) {
//       console.log(i, "fizz");
//     } else if (i % 5 === 0) {
//       console.log(i, "buzz");
//     }
//   }
// }
// fizzBuzz(15);

// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

// function isAdult(age) {
// if (age >= 18) {
//   return true;
// }
// return confirm("Чи є вам 18 років?");
//     return age >= 18 || confirm("Чи є вам 18 років?");
// }
//   console.log(isAdult(17));

// task 7;
// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

// let num = 0;
// while (num <= 10 ) {
//   console.log(num);
//   num +=1;
// }

// #region Task-8

// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"
// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// const login = prompt("Login:");
// console.log("🚀 ~ login:", login);

// switch (login) {
//   case "Адмін":
//     const pass = prompt("Password:");
//     alert(pass === "Я головний" ? "Добрий день!" : "Невірний пароль!");
//     break;

//   case "":
//   case null:
//     alert("Скасовано");
//     break;

//   default:
//     alert("Я вас не знаю");
// }

// #endregion Task-8

//1. Використовуя if...else,
//напишіть код, який буде питати через prompt:
//"Яка офіційна назва JavaScript?"
// Якщо користувач вводить "ECMASCRIPT",
//то показати через alert: "Вірно!"
//в противному випадку відобразити:"Не знаєте? ECMAScript!"
// *регістр не повинен впливати на правильну відповідь

// 10. Є рядок, який складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є літера 'a'.
// Якщо це так - виведіть в alert 'Yes', в іншому випадку - 'No'.

//2. Напишіть программу, яка отримує від користувача
//число (кількість хвилин) через prompt і виводить у консоль
//рядок у форматі годин та хвилин
// 70 === 01:10
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

//37. Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

function fillArray(min, max) {
    let arr = [];
    for (let i = min; i <= max; i += 2) {
      return arr.push(i)
    }
}

console.log(fillArray(2, 10));
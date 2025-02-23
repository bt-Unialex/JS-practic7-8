// 1. Створити список
// Створити кнопки Add, Remove, які будуть змінювати склад списку
// Створити input, з якого отримаємо значення, що буде передано в li
// Парним лі вказати жовтий фон, непарним синій
// Використовуй createElement

// const listEl = document.createElement("ul");
// const btnAddEl = document.createElement("button");
// const btnRemoveEl = document.createElement("button");
// const userInputEL = document.createElement("input");

// document.body.append(userInputEL, btnAddEl, btnRemoveEl, listEl);
// btnAddEl.textContent = "Add";
// btnRemoveEl.textContent = "Remove";

// btnAddEl.addEventListener("click", handleAdd);
// btnRemoveEl.addEventListener("click", handleRemove);

// function handleAdd() {
//     const value = userInputEL.value.trim();
//     if (value === "") {
//         return;
//     }
//     const liEl = document.createElement("li");
//     liEl.textContent = value;
//     listEl.append(liEl);
//     liEl.style.backgroundColor = listEl.children.length % 2 === 0 ? "yellow" : "blue"
//     // if (listEl.children.length % 2 === 0) {
//     //     liEl.style.backgroundColor = "yellow";
//     // } else {
//     //     liEl.style.backgroundColor = "blue";
//     // }
//     userInputEL.value = "";
// }

// function handleRemove() {
//     if (!listEl.lastChild) {
//         return;
//     }
//     listEl.lastChild.remove();
// }

// 2. Створити невелику гру
// Спочатку на екрані з'являється якась фігура рандомного коліру в рандомному місті
// Натискаючі на фігуру, вона змінює свою форму, колір, місце розташування

// const forms = [
//   "width: 100px; height: 100px; border-width: 1px;",
//   "width: 100px; height: 100px; border-radius: 50%;",
//   "width: 150px; height: 100px; border-width: 1px;",
//   "width: 200px; height: 100px; border-radius: 100px / 50px; ",
//   "width: 150px; height: 100px; transform: skew(20deg)",
// ];

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function randomither(max) {
//   return Math.floor(Math.random() * max);
// }

// const box = document.createElement("div");

// function changeStyles() {
//   box.style.cssText = forms[randomither(forms.length - 1)];
//   box.style.backgroundColor = getRandomHexColor();
//   box.style.position = "absolute";
//   box.style.top = `${randomither(100)}%`;
//   box.style.left = `${randomither(100)}%`;
// }

// changeStyles();

// document.body.append(box);

// box.addEventListener("click", changeStyles);

// 3. Створити розмітку на основі масива даних, де у кожного елемента списку
// буде вказано ім'я, кількість лайків і перелічені теги
// в index.html додайте список ul.stats, в який буде рендеритись цей список
// *властивість gender використай для додавання відповідного класу елементу списка

// const tweets = [
//   { id: "000", name: "Alex", gender: "male", likes: 5, tags: ["js", "nodejs"] },
//   {
//     id: "001",
//     name: "Kate",
//     gender: "female",
//     likes: 2,
//     tags: ["html", "css"],
//   },
//   {
//     id: "002",
//     name: "Maria",
//     gender: "female",
//     likes: 17,
//     tags: ["html", "js", "nodejs"],
//   },
//   {
//     id: "003",
//     name: "Borys",
//     gender: "male",
//     likes: 8,
//     tags: ["css", "react"],
//   },
//   {
//     id: "004",
//     name: "Jhon",
//     gender: "male",
//     likes: 10,
//     tags: ["js", "nodejs", "react"],
//   },
//   {
//     id: "005",
//     name: "Anna",
//     gender: "female",
//     likes: 3,
//     tags: ["js", "nodejs", "react"],
//   },
//   {
//     id: "006",
//     name: "Jhon",
//     gender: "male",
//     likes: 0,
//     tags: ["js", "nodejs", "react"],
//   },
// ];

// const list = document.querySelector(".stats");

// const markup = tweets.map(({id, name, gender, likes, tags}) => `
//     <li class="stats-item ${gender}" >
//         <p class="stats-name">${name}</p>
//         <p class="stats-likes">likes: ${likes}</p>
//         <p class="stats-tags">${tags}</p>

//         </li>
// `).join("");

// list.innerHTML = markup;

// 4. Кнопка "Приховати" ховає текст і замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним
// і кнопка набуває початкового вигляду.

const passwordInput = document.getElementById("passwordInput");
const passwordButton = document.getElementById("passwordButton");

passwordButton.addEventListener("click", function () {
  if (passwordButton.textContent === "Розкрити") {
    passwordInput.style.color = "inherit";
    passwordButton.textContent = "Приховати";
  } else {
    passwordButton.textContent = "Розкрити";
    passwordInput.style.color = "transparent";
  }
});

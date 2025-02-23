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

const forms = [
  "width: 100px; height: 100px; border-width: 1px;",
  "width: 100px; height: 100px; border-radius: 50%;",
  "width: 150px; height: 100px; border-width: 1px;",
  "width: 200px; height: 100px; border-radius: 100px / 50px; ",
  "width: 150px; height: 100px; transform: skew(20deg)",
];

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function randomither(max) {
  return Math.floor(Math.random() * max);
}

const box = document.createElement("div");

function changeStyles() {
  box.style.cssText = forms[randomither(forms.length - 1)];
  box.style.backgroundColor = getRandomHexColor();
  box.style.position = "absolute";
  box.style.top = `${randomither(100)}%`;
  box.style.left = `${randomither(100)}%`;
}

changeStyles();

document.body.append(box);

box.addEventListener("click", changeStyles);

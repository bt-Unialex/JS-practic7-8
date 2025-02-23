// 1. Створити список
// Створити кнопки Add, Remove, які будуть змінювати склад списку
// Створити input, з якого отримаємо значення, що буде передано в li
// Парним лі вказати жовтий фон, непарним синій
// Використовуй createElement

const listEl = document.createElement("ul");
const btnAddEl = document.createElement("button");
const btnRemoveEl = document.createElement("button");
const userInputEL = document.createElement("input");

document.body.append(userInputEL, btnAddEl, btnRemoveEl, listEl);
btnAddEl.textContent = "Add";
btnRemoveEl.textContent = "Remove";

btnAddEl.addEventListener("click", handleAdd);
btnRemoveEl.addEventListener("click", handleRemove);

function handleAdd() {
    const value = userInputEL.value.trim();
    if (value === "") {
        return;
    }
    const liEl = document.createElement("li");
    liEl.textContent = value;
    listEl.append(liEl);
    liEl.style.backgroundColor = listEl.children.length % 2 === 0 ? "yellow" : "blue"
    // if (listEl.children.length % 2 === 0) {
    //     liEl.style.backgroundColor = "yellow";
    // } else {
    //     liEl.style.backgroundColor = "blue";
    // }
    userInputEL.value = "";
}

function handleRemove() {
    if (!listEl.lastChild) {
        return;
    }
    listEl.lastChild.remove();
}
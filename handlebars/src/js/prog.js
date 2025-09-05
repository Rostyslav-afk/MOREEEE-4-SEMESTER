import book from "./book.json"
import template from "./book-template.hbs"

const list = document.querySelector(".list-js");

list.innerHTML = template({ book });
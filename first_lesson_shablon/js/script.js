const colors = [
    "#C71585",
    "#FF8C00",
    "#FFD700",
    "#BDB76B",
    "#FF00FF",
    "#4B0082",
    "#7FFF00",
    "#00FFFF",
    "#0000CD",
    "#F4A460",
    "#800000",
    "#778899",
    "#FFE4E1",
    "#191970",
];

const words = ["cloud",
    "forest",
    "guitar",
    "river",
    "friend",
    "sunset",
    "coffee",
    "dream",
    "ocean",
    "apple",
    "journey",
    "light",
    "book",
    "mountain"
];

const list = document.querySelector(".list");
const backdrop = document.querySelector(".backdrop");
const modalTitle = document.querySelector(".modal-title");
const modalButton = document.querySelector(".modal-button");


const createItem = colors.map(item => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomText = words[Math.floor(Math.random() * words.length)];
    return ` <li class="list-item" style="background-color: ${randomColor};"><p class="list-text">${randomText}</p></li>`;
}).join("");


list.insertAdjacentHTML("beforeend", createItem);


list.addEventListener("click", onItemClick);
modalButton.addEventListener("click", onModalClose)
window.addEventListener("keydown", onKeyClose)

function onItemClick(event) {
    backdrop.classList.add("is-show");
};

function onModalClose () {
    backdrop.classList.remove("is-show");
};

function onKeyClose () {
    if(event.key === "Escape"){
        backdrop.classList.remove("is-show");
    }
};

console.log(backdrop);

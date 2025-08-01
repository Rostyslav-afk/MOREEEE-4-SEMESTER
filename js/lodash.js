// const result = _.add(2,3);
// console.log(result);


// window.addEventListener("scroll", _.throttle(() => {
//     console.log("Виклик обробника подій прокручування кожні 300 мс");

// }, 300), 
// );

// document.querySelector("input").addEventListener("input", _.debounce(() => {
//     console.log("Виклик обробника подій введення після 2300 мс бездіяльності після вибуху");

// }, 2300),
// );


// document.addEventListener("scroll", _.debounce(() => {
//     console.log("Виклик обробника прокручування на кожному запуску потоку подій");
// }, 300,
//     {
//         leading: true,
//         trailing: false,
//     }
// )
// );


// Потрібно затримати виконання функції при введенні тексту в поле input, щоб не перевантажувати сервер. Використовуйте метод throttle з бібліотеки lodash. Встановіть час затримки в мілісекундах, наприклад 500мс, і передайте функцію, яку потрібно виконати при введенні тексту.

// const inputEl = document.querySelector("input");
// let text = "";  

// inputEl.addEventListener("input", _.throttle(() => {
//     text = inputEl.value;
//     console.log(text);
// }, 300));


// Потрібно забезпечити виклик функції при завершенні введення тексту в поле input. Використовуйте метод debounce з бібліотеки lodash. Встановіть час затримки в мілісекундах, наприклад 500мс, і передайте функцію, яку потрібно викликати при завершенні введення тексту.
// const inputEl = document.querySelector("input");

// inputEl.addEventListener("blur", _.debounce(event => {
//     console.log(event.target.value);
// }, 300));


// Потрібно забезпечити виклик функції при введенні тексту в поле input з певною затримкою. Використовуйте метод throttle з бібліотеки lodash. Встановіть час затримки в мілісекундах, наприклад 500мс, і передайте функцію, яку потрібно викликати при введенні тексту.
const inputEl = document.querySelector("input");

inputEl.addEventListener("input", _.throttle(writingText, 500));

function writingText(event){
    console.log(event.target.value);
    console.log("Відбулась подія");
    
};
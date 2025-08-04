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
// const inputEl = document.querySelector("input");

// inputEl.addEventListener("input", _.throttle(writingText, 500));

// function writingText(event){
//     console.log(event.target.value);
//     console.log("Відбулась подія");

// };

// const courses = [
//     { label: "html" },
//     { label: "css" },
//     { label: "java" },
//     { label: "python" },
//     { label: "react" },
//     { label: "java-script" },
//     { label: "node-js" },
//     { label: "scss" },
//     { label: "vite" },
//     { label: "C#" },
//     { label: "C++" },
//     { label: "SQL" },
//     { label: "PHP" },
//     { label: "Pascal" },
//     { label: "Scratch" },
//     { label: "Vue.js" },
//     { label: "Redux" },
// ];

// const listEl = document.querySelector(".list");
// const inputEl = document.querySelector(".input")


// const createItems = (array) => {
//     listEl.innerHTML = array.map(({label}) => {
//         return `<li class="item">${label}</li>`;
//     }).join("");
// };

// inputEl.addEventListener("input", _.debounce(inputWriting, 100), {once: true,})

// function inputWriting (evt) {
//     const searchValue = evt.target.value.toLowerCase().trim();
//     const filteredCourses = courses.filter(course => {
//         return course.label.toLowerCase().startsWith(searchValue)

//     });

//     createItems(filteredCourses);

// };

// createItems(courses)


const cars = [
    {
        photo:
            "https://images.wallpaperscraft.ru/image/single/bmw_avtomobil_bamper_191131_300x168.jpg",
        name: "Червоний седан 2024",
        price: 22000,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto harum distinctio quis cupiditate iure, dolorem, eveniet ipsam nostrum, totam natus quidem aperiam? Tempore nulla accusantium molestiae fugiat ducimus et architecto dolorem modi doloremque saepe sint similique, commodi consequuntur beatae autem asperiores perspiciatis animi fuga reprehenderit eos alias obcaecati amet molestias quisquam! Pariatur quidem adipisci veritatis dicta suscipit, magnam excepturi. Velit placeat recusandae, voluptatibus nostrum iusto cumque adipisci mollitia, commodi ullam incidunt laborum numquam minus. Voluptatum ipsum modi iste dignissimos praesentium maiores provident, exercitationem, saepe quibusdam nam perspiciatis dolore, animi odio dolorem odit eligendi impedit recusandae quo. Perspiciatis, fuga temporibus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto harum distinctio quis cupiditate iure, dolorem, eveniet ipsam nostrum, totam natus quidem aperiam? Tempore nulla accusantium molestiae fugiat ducimus et architecto dolorem modi doloremque saepe sint similique, commodi consequuntur beatae autem asperiores perspiciatis animi fuga reprehenderit eos alias obcaecati amet molestias quisquam! Pariatur quidem adipisci veritatis dicta suscipit, magnam excepturi. Velit placeat recusandae, voluptatibus nostrum iusto cumque adipisci mollitia, commodi ullam incidunt laborum numquam minus. Voluptatum ipsum modi iste dignissimos praesentium maiores provident, exercitationem, saepe quibusdam nam perspiciatis dolore, animi odio dolorem odit eligendi impedit recusandae quo. Perspiciatis, fuga temporibus?",
    },
    {
        photo:
            "https://st2.depositphotos.com/3591429/5247/i/450/depositphotos_52470577-stock-photo-red-car-on-white-background.jpg",
        name: "Розкішний червоний седан",
        price: 45000,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto harum distinctio quis cupiditate iure, dolorem, eveniet ipsam nostrum, totam natus quidem aperiam? Tempore nulla accusantium molestiae fugiat ducimus et architecto dolorem modi doloremque saepe sint similique, commodi consequuntur beatae autem asperiores perspiciatis animi fuga reprehenderit eos alias obcaecati amet molestias quisquam! Pariatur quidem adipisci veritatis dicta suscipit, magnam excepturi. Velit placeat recusandae, voluptatibus nostrum iusto cumque adipisci mollitia, commodi ullam incidunt laborum numquam minus. Voluptatum ipsum modi iste dignissimos praesentium maiores provident, exercitationem, saepe quibusdam nam perspiciatis dolore, animi odio dolorem odit eligendi impedit recusandae quo. Perspiciatis, fuga temporibus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto harum distinctio quis cupiditate iure, dolorem, eveniet ipsam nostrum, totam natus quidem aperiam? Tempore nulla accusantium molestiae fugiat ducimus et architecto dolorem modi doloremque saepe sint similique, commodi consequuntur beatae autem asperiores perspiciatis animi fuga reprehenderit eos alias obcaecati amet molestias quisquam! Pariatur quidem adipisci veritatis dicta suscipit, magnam excepturi. Velit placeat recusandae, voluptatibus nostrum iusto cumque adipisci mollitia, commodi ullam incidunt laborum numquam minus. Voluptatum ipsum modi iste dignissimos praesentium maiores provident, exercitationem, saepe quibusdam nam perspiciatis dolore, animi odio dolorem odit eligendi impedit recusandae quo. Perspiciatis, fuga temporibus?",
    },
    {
        photo:
            "https://img.mercedes-benz-kiev.com/data/lineup/c-class-coupe/c-class-coupe-8.jpeg",
        name: "Спортивне купе",
        price: 35000,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto harum distinctio quis cupiditate iure, dolorem, eveniet ipsam nostrum, totam natus quidem aperiam? Tempore nulla accusantiu moles estiae fugiat ducimus et architecto dolorem modi doloremque saepe sint similique, commodi consequuntur beatae autem asperiores perspiciatis animi fuga reprehenderit eos alias obcaecati amet molestias quisquam! Pariatur quidem adipisci veritatis dicta suscipit, magnam excepturi. Velit placeat recusandae, voluptatibus nostrum iusto cumque adipisci mollitia, commodi ullam incidunt laborum numquam minus. Voluptatum ipsum modi iste dignissimos praesentium maiores provident, exercitationem, saepe quibusdam nam perspiciatis dolore, animi odio dolorem odit eligendi impedit recusandae quo. Perspiciatis, fuga temporibus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto harum distinctio quis cupiditate iure, dolorem, eveniet ipsam nostrum, totam natus quidem aperiam? Tempore nulla accusantium molestiae fugiat ducimus et architecto dolorem modi doloremque saepe sint similique, commodi consequuntur beatae autem asperiores perspiciatis animi fuga reprehenderit eos alias obcaecati amet molestias quisquam! Pariatur quidem adipisci veritatis dicta suscipit, magnam excepturi. Velit placeat recusandae, voluptatibus nostrum iusto cumque adipisci mollitia, commodi ullam incidunt laborum numquam minus. Voluptatum ipsum modi iste dignissimos praesentium maiores provident, exercitationem, saepe quibusdam nam perspiciatis dolore, animi odio dolorem odit eligendi impedit recusandae quo. Perspiciatis, fuga temporibus?",
    },
    {
        photo:
            "https://media.istockphoto.com/id/1124669413/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B8%D0%BD%D0%B8%D0%B9-%D1%81%D0%B5%D0%B4%D0%B0%D0%BD-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C.jpg?s=612x612&w=0&k=20&c=6ULg9CUh06MGw-RMrz5SxVOhozroYQiaTlCQ96FyKJc=",
        name: "Сімейний седан",
        price: 25000,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto harum distinctio quis cupiditate iure, dolorem, eveniet ipsam nostrum, totam natus quidem aperiam? Tempore nulla accusantium molestiae fugiat ducimus et architecto dolorem modi doloremque saepe sint similique, commodi consequuntur beatae autem asperiores perspiciatis animi fuga reprehenderit eos alias obcaecati amet molestias quisquam! Pariatur quidem adipisci veritatis dicta suscipit, magnam excepturi. Velit placeat recusandae, voluptatibus nostrum iusto cumque adipisci mollitia, commodi ullam incidunt laborum numquam minus. Voluptatum ipsum modi iste dignissimos praesentium maiores provident, exercitationem, saepe quibusdam nam perspiciatis dolore, animi odio dolorem odit eligendi impedit recusandae quo. Perspiciatis, fuga temporibus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto harum distinctio quis cupiditate iure, dolorem, eveniet ipsam nostrum, totam natus quidem aperiam? Tempore nulla accusantium molestiae fugiat ducimus et architecto dolorem modi doloremque saepe sint similique, commodi consequuntur beatae autem asperiores perspiciatis animi fuga reprehenderit eos alias obcaecati amet molestias quisquam! Pariatur quidem adipisci veritatis dicta suscipit, magnam excepturi. Velit placeat recusandae, voluptatibus nostrum iusto cumque adipisci mollitia, commodi ullam incidunt laborum numquam minus. Voluptatum ipsum modi iste dignissimos praesentium maiores provident, exercitationem, saepe quibusdam nam perspiciatis dolore, animi odio dolorem odit eligendi impedit recusandae quo. Perspiciatis, fuga temporibus?",
    },
    {
        photo:
            "https://st.depositphotos.com/2528559/4990/i/450/depositphotos_49904447-stock-photo-small-black-economic-car-back.jpg",
        name: "Міський компакт",
        price: 18000,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto harum distinctio quis cupiditate iure, dolorem, eveniet ipsam nostrum, totam natus quidem aperiam? Tempore nulla accusantium molestiae fugiat ducimus et architecto dolorem modi doloremque saepe sint similique, commodi consequuntur beatae autem asperiores perspiciatis animi fuga reprehenderit eos alias obcaecati amet molestias quisquam! Pariatur quidem adipisci veritatis dicta suscipit, magnam excepturi. Velit placeat recusandae, voluptatibus nostrum iusto cumque adipisci mollitia, commodi ullam incidunt laborum numquam minus. Voluptatum ipsum modi iste dignissimos praesentium maiores provident, exercitationem, saepe quibusdam nam perspiciatis dolore, animi odio dolorem odit eligendi impedit recusandae quo. Perspiciatis, fuga temporibus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto harum distinctio quis cupiditate iure, dolorem, eveniet ipsam nostrum, totam natus quidem aperiam? Tempore nulla accusantium molestiae fugiat ducimus et architecto dolorem modi doloremque saepe sint similique, commodi consequuntur beatae autem asperiores perspiciatis animi fuga reprehenderit eos alias obcaecati amet molestias quisquam! Pariatur quidem adipisci veritatis dicta suscipit, magnam excepturi. Velit placeat recusandae, voluptatibus nostrum iusto cumque adipisci mollitia, commodi ullam incidunt laborum numquam minus. Voluptatum ipsum modi iste dignissimos praesentium maiores provident, exercitationem, saepe quibusdam nam perspiciatis dolore, animi odio dolorem odit eligendi impedit recusandae quo. Perspiciatis, fuga temporibus?",
    },
    {
        photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCtuJIfLarKwVMYTTpH1YCQyVUoJqf1OrzP6tBc1r2hkb54VGvujQovRpDO4Eytt96oYA&usqp=CAU",
        name: "Бізнес-седан",
        price: 52000,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto harum distinctio quis cupiditate iure, dolorem, eveniet ipsam nostrum, totam natus quidem aperiam? Tempore nulla accusantium molestiae fugiat ducimus et architecto dolorem modi doloremque saepe sint similique, commodi consequuntur beatae autem asperiores perspiciatis animi fuga reprehenderit eos alias obcaecati amet molestias quisquam! Pariatur quidem adipisci veritatis dicta suscipit, magnam excepturi. Velit placeat recusandae, voluptatibus nostrum iusto cumque adipisci mollitia, commodi ullam incidunt laborum numquam minus. Voluptatum ipsum modi iste dignissimos praesentium maiores provident, exercitationem, saepe quibusdam nam perspiciatis dolore, animi odio dolorem odit eligendi impedit recusandae quo. Perspiciatis, fuga temporibus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto harum distinctio quis cupiditate iure, dolorem, eveniet ipsam nostrum, totam natus quidem aperiam? Tempore nulla accusantium molestiae fugiat ducimus et architecto dolorem modi doloremque saepe sint similique, commodi consequuntur beatae autem asperiores perspiciatis animi fuga reprehenderit eos alias obcaecati amet molestias quisquam! Pariatur quidem adipisci veritatis dicta suscipit, magnam excepturi. Velit placeat recusandae, voluptatibus nostrum iusto cumque adipisci mollitia, commodi ullam incidunt laborum numquam minus. Voluptatum ipsum modi iste dignissimos praesentium maiores provident, exercitationem, saepe quibusdam nam perspiciatis dolore, animi odio dolorem odit eligendi impedit recusandae quo. Perspiciatis, fuga temporibus?",
    },
    {
        photo:
            "https://st4.depositphotos.com/1350793/19604/i/450/depositphotos_196046280-stock-photo-a-brand-new-white-tesla.jpg",
        name: "Електричний седан",
        price: 38000,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto harum distinctio quis cupiditate iure, dolorem, eveniet ipsam nostrum, totam natus quidem aperiam? Tempore nulla accusantium molestiae fugiat ducimus et architecto dolorem modi doloremque saepe sint similique, commodi consequuntur beatae autem asperiores perspiciatis animi fuga reprehenderit eos alias obcaecati amet molestias quisquam! Pariatur quidem adipisci veritatis dicta suscipit, magnam excepturi. Velit placeat recusandae, voluptatibus nostrum iusto cumque adipisci mollitia, commodi ullam incidunt laborum numquam minus. Voluptatum ipsum modi iste dignissimos praesentium maiores provident, exercitationem, saepe quibusdam nam perspiciatis dolore, animi odio dolorem odit eligendi impedit recusandae quo. Perspiciatis,fuga temporibus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto harum distinctio quis cupiditate iure, dolorem, eveniet ipsam nostrum, totam natus quidem aperiam? Tempore nulla accusantium molestiae fugiat ducimus et architecto dolorem modi doloremque saepe sint similique, commodi consequuntur beatae autem asperiores perspiciatis animi fuga reprehenderit eos alias obcaecati amet molestias quisquam! Pariatur quidem adipisci veritatis dicta suscipit, magnam excepturi. Velit placeat recusandae, voluptatibus nostrum iusto cumque adipisci mollitia, commodi ullam incidunt laborum numquam minus. Voluptatum ipsum modi iste dignissimos praesentium maiores provident, exercitationem, saepe quibusdam nam perspiciatis dolore, animi odio dolorem odit eligendi impedit recusandae quo. Perspiciatis, fuga temporibus?",
    },
    {
        photo:
            "https://cdn.riastatic.com/photosnew/auto/photo/bmw_1-series__583604633f.jpg",
        name: "Червоний хетчбек",
        price: 20000,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto harum distinctio quis cupiditate iure, dolorem, eveniet ipsam nostrum, totam natus quidem aperiam? Tempore nulla accusantium molestiae fugiat ducimus et architecto dolorem modi doloremque saepe sint similique, commodi consequuntur beatae autem asperiores perspiciatis animi fuga reprehenderit eos alias obcaecati amet molestias quisquam! Pariatur quidem adipisci veritatis dicta suscipit, magnam excepturi. Velit placeat recusandae, voluptatibus nostrum iusto cumque adipisci mollitia, commodi ullam incidunt laborum numquam minus. Voluptatum ipsum modi iste dignissimos praesentium maiores provident, exercitationem, saepe quibusdam nam perspiciatis dolore, animi odio dolorem odit eligendi impedit recusandae quo. Perspiciatis, fuga temporibus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto harum distinctio quis cupiditate iure, dolorem, eveniet ipsam nostrum, totam natus quidem aperiam? Tempore nulla accusantium molestiae fugiat ducimus et architecto dolorem modi doloremque saepe sint similique, commodi consequuntur beatae autem asperiores perspiciatis animi fuga reprehenderit eos alias obcaecati amet molestias quisquam! Pariatur quidem adipisci veritatis dicta suscipit, magnam excepturi. Velit placeat recusandae, voluptatibus nostrum iusto cumque adipisci mollitia, commodi ullam incidunt laborum numquam minus. Voluptatum ipsum modi iste dignissimos praesentium maiores provident, exercitationem, saepe quibusdam nam perspiciatis dolore, animi odio dolorem odit eligendi impedit recusandae quo. Perspiciatis, fuga temporibus?",
    },
    {
        photo:
            "https://cdn0.riastatic.com/photosnew/auto/photo/byd_han__489747315f.jpg",
        name: "Преміум седан",
        price: 60000,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto harum distinctio quis cupiditate iure, dolorem, eveniet ipsam nostrum, totam natus quidem aperiam? Tempore nulla accusantium molestiae fugiat ducimus et architecto dolorem modi doloremque saepe sint similique, commodi consequuntur beatae autem asperiores perspiciatis animi fuga reprehenderit eos alias obcaecati amet molestias quisquam! Pariatur quidem adipisci veritatis dicta suscipit, magnam excepturi. Velit placeat recusandae, voluptatibus nostrum iusto cumque adipisci mollitia, commodi ullam incidunt laborum numquam minus. Voluptatum ipsum modi iste dignissimos praesentium maiores provident, exercitationem, saepe quibusdam nam perspiciatis dolore, animi odio dolorem odit eligendi impedit recusandae quo. Perspiciatis, fuga temporibus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto harum distinctio quis cupiditate iure, dolorem, eveniet ipsam nostrum, totam natus quidem aperiam? Tempore nulla accusantium molestiae fugiat ducimus et architecto dolorem modi doloremque saepe sint similique, commodi consequuntur beatae autem asperiores perspiciatis animi fuga reprehenderit eos alias obcaecati amet molestias quisquam! Pariatur quidem adipisci veritatis dicta suscipit, magnam excepturi. Velit placeat recusandae, voluptatibus nostrum iusto cumque adipisci mollitia, commodi ullam incidunt laborum numquam minus. Voluptatum ipsum modi iste dignissimos praesentium maiores provident, exercitationem, saepe quibusdam nam perspiciatis dolore, animi odio dolorem odit eligendi impedit recusandae quo. Perspiciatis, fuga temporibus?",
    },
    {
        photo:
            "https://images.pexels.com/photos/12506011/pexels-photo-12506011.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Червоний спідстер",
        price: 48000,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto harum distinctio quis cupiditate iure, dolorem, eveniet ipsam nostrum, totam natus quidem aperiam? Tempore nulla accusantium molestiae fugiat ducimus et architecto dolorem modi doloremque saepe sint similique, commodi consequuntur beatae autem asperiores perspiciatis animi fuga reprehenderit eos alias obcaecati amet molestias quisquam! Pariatur quidem adipisci veritatis dicta suscipit, magnam excepturi. Velit placeat recusandae, voluptatibus nostrum iusto cumque adipisci mollitia, commodi ullam incidunt laborum numquam minus. Voluptatum ipsum modi iste dignissimos praesentium maiores provident, exercitationem, saepe quibusdam nam perspiciatis dolore, animi odio dolorem odit eligendi impedit recusandae quo. Perspiciatis, fuga temporibus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto harum distinctio quis cupiditate iure, dolorem, eveniet ipsam nostrum, totam natus quidem aperiam? Tempore nulla accusantium molestiae fugiat ducimus et architecto dolorem modi doloremque saepe sint similique, commodi consequuntur beatae autem asperiores perspiciatis animi fuga reprehenderit eos alias obcaecati amet molestias quisquam! Pariatur quidem adipisci veritatis dicta suscipit, magnam excepturi. Velit placeat recusandae, voluptatibus nostrum iusto cumque adipisci mollitia, commodi ullam incidunt laborum numquam minus. Voluptatum ipsum modi iste dignissimos praesentium maiores provident, exercitationem, saepe quibusdam nam perspiciatis dolore, animi odio dolorem odit eligendi impedit recusandae quo. Perspiciatis, fuga temporibus?",
    },
];


const listEl = document.querySelector(".list");

const createItems = cars.map(({ photo, name, price, description }) => {
    return `<li class="item">
            <img src="${photo}" alt="${name}" class="image" loading="lazy">
            <h2 class="title">${name}</h2>
            <p class="text">${price}</p>
            <p class="desc">${description}</p>
        </li>`;
});

listEl.innerHTML = createItems;
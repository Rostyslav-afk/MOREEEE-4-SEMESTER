 import { alert, defaultModules, success } from '../../node_modules/@pnotify/core/dist/PNotify.js';
  import * as PNotifyMobile from '../../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
// import * as PNotifyMobile from '@pnotify/mobile';
// import '@pnotify/mobile/dist/PNotifyMobile.css';
// import "@pnotify/core/dist/PNotify.css";
import '@pnotify/core/dist/BrightTheme.css';

defaultModules.set(PNotifyMobile, {});

const button = document.querySelector("button");

button.addEventListener("click", () => {
    success({
        title: 'Дякую!',
        text: 'Заявка принята!',
        delay: 1000 // час скільки буде висіти модалка
    });
});

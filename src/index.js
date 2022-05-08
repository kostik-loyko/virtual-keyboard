import 'normalize.css'
import './styles/main.scss';

const body = document.querySelector('body');

const textarea = document.createElement('textarea');
textarea.classList.add('textarea');
textarea.setAttribute('autofocus', 'autofocus');

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');

const keys = document.createElement('ul');
keys.classList.add('keys');

const keyEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', 'Space', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];
const keyEnBig = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Delete', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];
const keyRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];
const keyRuBig = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Delete', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];
const codes = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

body.appendChild(textarea);
body.appendChild(keyboard);
keyboard.appendChild(keys);

// функция создающая раскладку клавиатуры + регистр, аргумен - массив с соответствующим языком ↓

const sizeToggle = () => {
   document.addEventListener('keydown', (evn) => {
      if (evn.code === 'CapsLock') {
         localStorage.getItem('sizeLetter') !== 'true' ? localStorage.setItem('sizeLetter', 'true') : localStorage.setItem('sizeLetter', 'false');
         location.reload();
      }
   });
}
sizeToggle();
localStorage.length === 0 ? localStorage.setItem('sizeLetter', 'false') : sizeToggle;

const keyboardAll = (keyValue) => {
   keyValue.forEach((element) => {
      let key = document.createElement('li');
      key.classList.add('key');
      key.textContent = element;
      keys.appendChild(key);
   });
}


if (localStorage.getItem('lang') === 'en') {
   if (localStorage.getItem('sizeLetter') === 'false') {
      keyboardAll(keyEn);
   } else {
      keyboardAll(keyEnBig);
   }

} else {
   if (localStorage.getItem('sizeLetter') === 'false') {
      keyboardAll(keyRu);
   } else {
      keyboardAll(keyRuBig);
   }
}

// задаю нажатие клавише, запрещаю действия по умолчанию только буквам, числа, симфолам ↓

const keyArr = document.querySelectorAll('.key');
document.addEventListener('keydown', (evn) => {
   keyArr.forEach((key, index) => {
      if (codes[index] === evn.code) {
         key.classList.add('active');
         if (key.textContent.length === 1) {
            evn.preventDefault();
            textarea.value = textarea.value + key.textContent;
         }
         if (key.textContent === 'Tab') {
            evn.preventDefault();
            textarea.value = textarea.value + '    ';
         }
         if (key.textContent === 'Alt') {
            evn.preventDefault();
            textarea.value = textarea.value + '';
         }
      }
   })
})

document.addEventListener('keyup', (evn) => {
   keyArr.forEach((key, index) => {
      if (codes[index] === evn.code) {
         key.classList.remove('active');
      }
   })
})

// задаю язык ввода ↓

const langToggle = () => {
   document.addEventListener('keydown', (event) => {
      if (event.altKey && event.ctrlKey) {
         localStorage.getItem('lang') !== 'ru' ? localStorage.setItem('lang', 'ru') : localStorage.setItem('lang', 'en');
         location.reload();
      }
   });
}
langToggle();
localStorage.length === 0 ? localStorage.setItem('lang', 'en') : langToggle;



// const cod = [];
// document.addEventListener('keydown', (evn) => {
//    cod.push(evn.key);
//    console.log(cod);
//    // console.log(evn);
// })

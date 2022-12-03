// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку
//  на button.change - color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const span = document.querySelector('.color');
const buttonChange = document.querySelector('.change-color');

buttonChange.addEventListener('click', bodyChangeColor);

 function bodyChangeColor() {

  body.style.backgroundColor = getRandomHexColor();
   span.textContent = body.style.backgroundColor;
 }

// function bodyChangeColor() {
//   const randomHexColor = getRandomHexColor();

//   body.style.backgroundColor = randomHexColor;
//   span.textContent =  body.style.backgroundColor;
// }
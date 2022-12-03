// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в
//  span#name - output.Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>


const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', changeText);

function changeText(event) {
span.textContent = event.currentTarget.value;

 if (event.currentTarget.value === '') {
    span.textContent = 'Anonymous';
  }
}

// input.addEventListener('input', (event) => {
    
//    const span = document.querySelector('#name-output');

//      span.textContent = event.currentTarget.value;
//  if (event.currentTarget.value === '') {
//     span.textContent = 'Anonymous';
//   }
//  });
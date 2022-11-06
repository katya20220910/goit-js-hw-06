let counterValue = 0;

const buttonDec = document.querySelector('[data-action="decrement"]');
const buttonInc = document.querySelector('[data-action="increment"]');
const decrement = () => {
    counterValue -= 1;
    document.getElementById('value').textContent = counterValue;
};

const increment = () => {
    counterValue += 1;
    document.getElementById('value').textContent = counterValue;
};

buttonDec.addEventListener("click", decrement);
buttonInc.addEventListener("click", increment);


console.log(counterValue);
console.log(buttonDec);
console.log(buttonInc);
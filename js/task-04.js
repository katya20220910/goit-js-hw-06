let counterValue = 0;
const buttonDec = document.querySelector('[data-action="decrement"]');
const btnDecrement = () => {
    counterValue -= 1;
};
buttonDec.addEventListener("click", btnDecrement);
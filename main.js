const basePrice = 400000;
let amount = 0;

const basePriceHTML = document.querySelector('#base-price');
const amountHTML = document.querySelector('#amount');
const btnSubtractHTML = document.querySelectorAll('#card button')[0];
const btnAddHTML = document.querySelectorAll('#card button')[1];
const totalHTML = document.querySelector('#total');

basePriceHTML.innerHTML = `$${basePrice}`;
amountHTML.innerHTML = amount;
totalHTML.innerHTML = calculateTotal(basePrice, amount);

btnSubtractHTML.addEventListener('click', substract);
btnAddHTML.addEventListener('click', add);

function substract() {
  if (amount > 0) {
    amount = amount - 1;
    amountHTML.innerHTML = amount;
    totalHTML.innerHTML = calculateTotal(basePrice, amount);
  }
}

function add() {
  amount = amount + 1;
  amountHTML.innerHTML = amount;
  totalHTML.innerHTML = calculateTotal(basePrice, amount);
}

function calculateTotal(basePrice, amount) {
  const total = basePrice * amount;
  return `$${total}`;
}

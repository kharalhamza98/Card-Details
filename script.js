const nameInput = document.querySelector('#cardName');
const numberInput = document.querySelector('#cardNum');
const monthInput = document.querySelector('#cardMonth');
const yearInput = document.querySelector('#cardYear');
const cvcInput = document.querySelector('#cardCvc');
const numDisplay = document.querySelector('.cardNumDisplay');
const nameDisplay = document.querySelector('.cardNameDisplay');
const monthDisplay = document.querySelector('.cardMonthDisplay');
const yearDisplay = document.querySelector('.cardYearDisplay');
const cvcDisplay = document.querySelector('.cardCvcDisplay');
const confirm = document.querySelector('.confirm');
const thanks = document.querySelector('.thankYouPage');
const inputs = document.querySelector('.cardInputs');
const goBack = document.querySelector('.continue');

document.addEventListener('DOMContentLoaded', () => {
  numberInput.addEventListener('input', () => {
    let cardNumber = numberInput.value.replace(/\s+/g, ''); // Remove all spaces
    let formattedCardNumber = '';

    for (let i = 0; i < cardNumber.length; i += 4) {
      formattedCardNumber += cardNumber.substring(i, i + 4) + ' ';
    }

    formattedCardNumber = formattedCardNumber.trim(); // Remove trailing space
    numberInput.value = formattedCardNumber; // Update input field with formatted number
    numDisplay.textContent = formattedCardNumber; // Update card number display
  });

  nameInput.addEventListener('input', () => {
    let name = nameInput.value;

    nameDisplay.textContent = name;
  });

  monthInput.addEventListener('input', () => {
    let month = monthInput.value;

    monthDisplay.textContent = month;
  });

  yearInput.addEventListener('input', () => {
    let year = yearInput.value;

    yearDisplay.textContent = year;
  });

  cvcInput.addEventListener('input', () => {
    let cvc = cvcInput.value;

    cvcDisplay.textContent = cvc;
  });

  confirm.addEventListener('click', (e) => {
    e.preventDefault();

    thanks.classList.remove('hidden');
    inputs.classList.add('hidden');
  });

  goBack.addEventListener('click', () => {
    thanks.classList.add('hidden');
    inputs.classList.remove('hidden');
  });
});

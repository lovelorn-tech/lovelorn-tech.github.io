const formTickets = document.getElementById("form-tickets");

const inputName = document.getElementById("input-name");
const inputSurname = document.getElementById("input-surname");
const inputEmail = document.getElementById("input-email");
const inputQuantity = document.getElementById("input-quantity");
const inputCategory = document.getElementById("input-category");

const priceSpan = document.getElementById("price");
const btnClear = document.getElementById("btn-clear");

formTickets.onsubmit = (e) => {
  e.preventDefault();
  const discount =
    inputCategory.value === "student"
      ? 0.8
      : inputCategory.value === "trainee"
     ? 0.5
      : 0.15;
    
  const price = (200 * inputQuantity.value) - ((200 * inputQuantity.value) * discount);
  priceSpan.innerHTML = price;
};

btnClear.onclick = () => formTickets.reset();

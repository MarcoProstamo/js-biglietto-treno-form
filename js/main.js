// # Selecting DOM Elements
const fullnameEl = document.querySelector("#input-fullname");
const tripLengthEl = document.querySelector("#input-trip-length");
const ageEl = document.querySelector("#input-age");
const submitEl = document.querySelector("#submit-button");
const clearEl = document.querySelector("#clear-button");
const displayEl = document.querySelector("#display");
const userNameEl = document.querySelector("#user-name");
const ticketPriceEl = document.querySelector("#ticket-price");

// # Variable Init
const pricePerKm = 0.21;
const discountUnder18 = 0.8;
const discountOver65 = 0.6;

// # Utility Fn
function ticketPriceCalc(tripLength, pricePerKm, age) {
  let ticketPrice = tripLength * pricePerKm;
  switch (age) {
    case "Under 18":
      ticketPrice *= discountUnder18;
      break;
    case "Over 65":
      ticketPrice *= discountOver65;
      break;
    default:
      break;
  }
  return `${ticketPrice} &euro;`;
}

function clearInput() {
  fullnameEl.value = "";
  tripLengthEl.value = "";
  ageEl.value = "Scegli...";
}

// # Event Listener
submitEl.addEventListener("click", () => {
  const fullName = fullnameEl.value.trim();
  const tripLength = parseInt(tripLengthEl.value);
  const age = ageEl.value;

  userNameEl.innerHTML = fullName;
  ticketPriceEl.innerHTML = ticketPriceCalc(tripLength, pricePerKm, age);

  displayEl.className = "d-block";
  clearInput();
});

clearEl.addEventListener("click", () => {
  displayEl.className = "d-none";
  clearInput();
});

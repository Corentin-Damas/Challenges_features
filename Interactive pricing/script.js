const value = document.querySelector("#pageviews-value");
const price = document.querySelector("#pageviews-price");
const input = document.querySelector("#pageviews");
const slider = document.querySelector(".range-slider");
const bill = document.querySelector(".yearlybill-checkbox");

// Base set up properties
const valueDictionnary = {
  prices: [8, 12, 16, 24, 36],
  pageViews: ["10K", "50K", "100K", "500K", "1M"],
};
let range = 3;

//function to DISPLAY values depending on Monthly / Yearly discount
const applyValues = function (x) {
  value.textContent = valueDictionnary["pageViews"][x];

  let tempPrice = valueDictionnary["prices"][x];
  bill.checked == true
    ? (tempPrice = reducePrice(tempPrice))
    : (tempPrice = tempPrice);
  price.textContent = `$${tempPrice}.00`;
};

// Display the price when opening the page
applyValues(range);

// Function to calculate the yearly bill discount
const reducePrice = function (coast) {
  newPrice = coast - coast * 0.25;
  return newPrice;
};

///////////////////////////////////////////////////////////
// PRICE VALUE EVENT LISTENNER

//  Refresh the price after using Switch button
//  ~~ Fix problem where the prices is not refresh after mooving from range to range and
//  ~~ suddenly swithing from on billing option to the other
bill.addEventListener("click", () => {
  applyValues(range);
});

//  Refresh the price after passing each treshold
input.addEventListener("input", () => {
  let resist = document.querySelector("#pageviews").value;

  if (resist < 25) {
    range = 0;
    applyValues(range);
  }

  if (resist >= 25 && resist < 50) {
    range = 1;
    applyValues(range);
  }

  if (resist >= 50 && resist < 75) {
    range = 2;
    applyValues(range);
  }

  if (resist >= 75 && resist < 100) {
    range = 3;
    applyValues(range);
  }

  if (resist >= 100) {
    range = 4;
    applyValues(range);
  }
});

///////////////////////////////////////////////////////////
// CUSTOM CURSOR
// ~~ We need to apply custom gradient for the cursor depending of
// ~~ the possition from the cursor
input.addEventListener("input", function () {
  let x = input.value;
  let color =
    "linear-gradient(90deg, hsl(174, 86%, 45%)" +
    x +
    "%, hsl(224, 65%, 95%)" +
    x +
    "%)";
  slider.style.background = color;
});

const value = document.querySelector("#pageviews-value");
const price = document.querySelector("#pageviews-price");
const input = document.querySelector("#pageviews");
// const slider = document.querySelector('.range-slider');
const slider = document.querySelector(".range-slider");

value.textContent = "100k";
price.textContent = "$16.00";

input.addEventListener("input", () => {
  let resist = document.querySelector("#pageviews").value;

  if (resist < 25) {
    value.textContent = "10K";
    price.textContent = "$8.00";
  }

  if (resist >= 25 && resist < 50) {
    value.textContent = "50K";
    price.textContent = "$12.00";
  }

  if (resist >= 50 && resist < 75) {
    value.textContent = "100K";
    price.textContent = "$16.00";
  }

  if (resist >= 75 && resist < 100) {
    value.textContent = "500K";
    price.textContent = "$24.00";
  }

  if (resist >= 100) {
    value.textContent = "1M";
    price.textContent = "$36.00";
  }

  //   let sliderColor = `background-image: linear-gradient(90deg, var(--pr--soft-cyan) ${resist}%, var(--nt-light-grayish-blue-1) ${resist}%);`;
  // slider.style.background = sliderColor;
});

input.addEventListener("click", function () {
  let x = input.value;
  console.log(`this is the background ${input.style.background}`);
  // slider.style.background =
  //   "linear-gradient(90deg, hsl(174, 86%, 45%) 60%, hsl(224, 65%, 95%) 60%);";
});

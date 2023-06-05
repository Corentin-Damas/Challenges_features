const value = document.querySelector("#pageviews-value");
const price = document.querySelector("#pageviews-price");

const input = document.querySelector("#pageviews");

value.textContent = "50k";
price.textContent = 16;

input.addEventListener("input", () => {
  let resist = document.querySelector("#pageviews").value;

  if (resist <=25) {
    value.textContent = "10K"
    price.textContent = 8
  }

  if (resist >25 && resist <=50) {
    value.textContent = "50K"
    price.textContent = 12
  }

  if (resist >50 && resist <=75) {
    value.textContent = "100K"
    price.textContent = 16
  }

  if (resist >75 && resist <100) {
    value.textContent = "500K"
    price.textContent = 24
  }

  if (resist >=100) {
    value.textContent = "1M"
    price.textContent = 36
  }
});


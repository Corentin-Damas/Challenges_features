const testimonilaText = document.querySelectorAll(".testimonial__text");
const testimonilaDetail = document.querySelectorAll(".testimonial__details");
const profilImage = document.querySelectorAll(".profil-img");
const nextbtn = document.querySelector(".btn-next");
const prevbtn = document.querySelector(".btn-previous");

changing_elements = [testimonilaText, testimonilaDetail, profilImage];

// Didn't differenciate previous and next btn for that challenge because there is
// only 2 elements to show, if they was 3 or more elements to show in the carousel.
// We should have take care of a proper following of each step

nextbtn.addEventListener("click", function () {
  updateStepper(changing_elements);
});

prevbtn.addEventListener("click", function () {
  updateStepper(changing_elements);
});

// take an array of element to change on the page
function updateStepper(arr) {
  for (let step = 0; step < arr.length; step++)
    arr[step].forEach((el) => {
      el.classList.toggle("hide");
    });
}

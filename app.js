const left = document.querySelector(".left");
const right = document.querySelector(".right");
const img = document.querySelector(".table");
let position = 1;
function pos() {
  if (position < 1) {
    position = 1;
  } else if (position > 6) {
    position = 6;
  }
  if (position === 1) {
    img.src = "img/1.01 Screenshot 2022-09-15.png";
  } else if (position === 2) {
    img.src = "img/10.01 Screenshot 2022-09-15.png";
  } else if (position === 3) {
    img.src = "img/10.20 Screenshot 2022-09-15.png";
  } else if (position === 4) {
    img.src = "img/15.01 Screenshot 2022-09-15.png";
  } else if (position === 5) {
    img.src = "img/65.01 Screenshot 2022-09-15.png";
  } else if (position === 6) {
    img.src = "img/80.01 Screenshot 2022-09-15.png";
  }
}
left.addEventListener("click", () => {
  position--;
  pos();
});
right.addEventListener("click", () => {
  position++;
  pos();
});

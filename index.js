const counterNumber = document.querySelector(".number");
const addBtnPlus = document.querySelector(".addBtnPlus");
const minusBtn = document.querySelector(".minusBtnPlus");
const resetBtn = document.querySelector(".resetBtnPlus");

addBtnPlus.addEventListener("click", () => {
  counterNumber.innerHTML++;
});

minusBtn.addEventListener("click", () => {
  counterNumber.innerHTML--;
});

resetBtn.addEventListener("click", () => {
  counterNumber.innerHTML = 0;
});

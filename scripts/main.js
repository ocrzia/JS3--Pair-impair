// ==============================
// 🌱 Sélection des éléments
// ==============================
const myNumber = document.querySelector('.nombre');
const checkBt = document.querySelector('.check');
const result = document.querySelector('.result');

// ==============================
// 🧲 Événements
// ==============================

checkBt.addEventListener('click', function(e) {
  e.preventDefault();
  // result.className = "result";
  result.classList.remove('pair', 'impair');
  if (myNumber.value % 2 == 0) {
    result.classList.add("pair");
    result.textContent = `Le nombre ${myNumber.value} est pair`;
  } else {
    result.classList.add("impair");
    result.textContent = `Le nombre ${myNumber.value} est impair`;
  }
  myNumber.value = "";
  myNumber.select();
});
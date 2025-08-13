// Selecting Elements
const bodyEl = document.querySelector("body");
const numEl = document.getElementById("num-el");
const textEl = document.getElementById("text-el");
const diceEl = document.getElementById("dice-el");
const rollBtn = document.getElementById("roll-btn");
const coinEl = document.getElementById("coin-el");
const diceCardEl = document.getElementById("dice-card-el");
const tossCardEl = document.getElementById("toss-card-el");
const diceTitleEl = document.getElementById("dice-title-el");
const tossTitleEl = document.getElementById("toss-title-el");
const footerEl = document.getElementById("footer-el");
const myGithub = document.getElementById("my-github");

// Changing color
function changingColor() {
  
  // Generating random color
  let randomColor = "#" + Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0');

  // Applying random color to the elements
  rollBtn.style.background = randomColor;
  coinEl.style.background = randomColor;
  diceEl.style.background = randomColor;
  bodyEl.style.background = randomColor;
  diceTitleEl.style.color = randomColor;
  tossTitleEl.style.color = randomColor;
  footerEl.style.color = randomColor;
  myGithub.style.color = randomColor;

  // Generating inverted color
  let invertedColor = invertColor(randomColor);

  // Applying inverted colors to the elements
  diceCardEl.style.background = invertedColor;
  tossCardEl.style.background = invertedColor;
  numEl.style.color = invertedColor;
  textEl.style.color = invertedColor;
  rollBtn.style.color = invertedColor;
  coinEl.style.color = invertedColor;
  diceTitleEl.style.background = invertedColor;
  tossTitleEl.style.background = invertedColor;
  footerEl.style.background = invertedColor;
}

// Generating inverted random color
function invertColor(hex) {
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1);
  }

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.');
  }

  let r = (255 - parseInt(hex.substring(0, 2), 16))
    .toString(16)
    .padStart(2, '0');

  let g = (255 - parseInt(hex.substring(2, 4), 16))
    .toString(16)
    .padStart(2, '0');

  let b = (255 - parseInt(hex.substring(4, 6), 16))
    .toString(16)
    .padStart(2, '0');

  return '#' + r + g + b;
}

// Rolling Dice
rollBtn.addEventListener("click", () => {
  numEl.textContent = Math.floor(Math.random() * 6) + 1;
  changingColor();
});

// Flipping coin
coinEl.addEventListener("click", () => {
  let flip = Math.floor(Math.random() * 2);
  coinEl.textContent = (flip === 0) ? "Heads" : "Tails";
  changingColor();
});
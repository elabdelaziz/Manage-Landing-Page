function isClicked(event) {
  document.querySelector("header ul").classList.add("btn-clicked");
  document.querySelector(".toggle-menu.open").style.display = "none";
  document.querySelector(".toggle-menu.close").style.display = "block";
}

function isClosed(event) {
  document.querySelector("header ul").classList.remove("btn-clicked");
  document.querySelector(".toggle-menu.open").style.display = "block";
  document.querySelector(".toggle-menu.close").style.display = "none";
}

// Slideshow
let cardIndex = 1;
const cards = document.getElementsByClassName("card");
const dots = document.getElementsByClassName("dot");

showCards(cardIndex);

function currentCard(n) {
  showCards((cardIndex = n));
}
function nextCard() {
  cardIndex++;
  if (cardIndex > cards.length) {
    cardIndex = 1;
  }
  showCards(cardIndex);
}

// show selected Card

function showCards(n) {
  let i;

  if (n > cards.length) {
    cardIndex = 1;
  }
  if (n < 1) {
    cardIndex = cards.length;
  }
  for (i = 0; i < cards.length; i++) {
    cards[i].classList.remove("active-card");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  cards[cardIndex - 1].classList.add("active-card");
  dots[cardIndex - 1].classList.add("active");
}

setInterval(nextCard, 15000);


// looping for clicking on all cards/blocks
function cardClicking () {
    const card = document.querySelectorAll("div.card__inner");
    for (let i = 0; i < card.length; i++) {
        card[i].addEventListener("click", function() {
          card[i].classList.toggle('is-flipped');
        });
    }
}
cardClicking()

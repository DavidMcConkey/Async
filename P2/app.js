$(function () {
  let URL = "https://deckofcardsapi.com/api/deck";

  // P1
  async function p1() {
    let data = await $.getJSON(`${URL}/new/draw/`);
    let { suit, value } = data.cards[0];
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
  }

  // P2
  async function p2() {
    let firstCardData = await $.getJSON(`${URL}/new/draw/`);
    let deckId = firstCardData.deck_id;
    let secondCardData = await $.getJSON(`${URL}/${deckId}/draw/`);
    [firstCardData, secondCardData].forEach((card) => {
      let { suit, value } = card.cards[0];
      console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    });
  }

  // P3
  async function setup() {
    let $btn = $("button");
    let $cardArea = $("#card-area");

    let deckData = await $.getJSON(`${URL}/new/shuffle/`);
    $btn.show().on("click", async function () {
      let cardData = await $.getJSON(`${URL}/${deckData.deck_id}/draw/`);
      let cardSrc = cardData.cards[0].image;
      let angle = Math.random() * 90 - 45;
      let randomX = Math.random() * 40 - 20;
      let randomY = Math.random() * 40 - 20;
      $cardArea.append(
        $("<img>", {
          src: cardSrc,
          css: {
            transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`,
          },
        })
      );
      if (cardData.remaining === 0) $btn.remove();
    });
  }
  setup();
});

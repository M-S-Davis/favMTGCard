document.querySelector("#clickMe").addEventListener("click", getCard);

async function getCard(e) {
  // e.preventDefault();
  const cardName = document.querySelector("#cardName").value;
  const userName = document.querySelector("#userName").value;

  const res = await fetch(
    `https://api.magicthegathering.io/v1/cards?name=${cardName}`
  );
  const data = await res.json();

  console.log(data);

  console.log(data.cards[0].name);

  //Card image
  document.querySelector(".card-image").src = data.cards[0].imageUrl;
  //Card Title
  document.querySelector(".card-title").textContent = data.cards[0].name;
  //User who added the card
  document.querySelector(".user-name").textContent = userName;
  //Card text
  document.querySelector(".card-text").textContent = data.cards[0].text;
  //Card converted mana cost
  document.querySelector(".cmc").textContent = data.cards[0].cmc;
}

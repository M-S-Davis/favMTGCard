document.querySelector("#clickMe").addEventListener("click", getCard);

async function getCard() {
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

async function testCard(cardName) {
  const res = await fetch(
    `https://api.magicthegathering.io/v1/cards?name=${cardName}`
  );
  const data = await res.json();

  //Test code (Remove before final push)
  console.log(data);
  console.log(data.cards[0].name);

  //Card image
  document.querySelector(".card-image").src = data.cards[0].imageUrl;
  //Card Title
  document.querySelector(".card-title").textContent = data.cards[0].name;
  //User who added the card
  document.querySelector(".user-name").textContent = "testName";
  //Card text
  document.querySelector(".card-text").textContent = data.cards[0].text;
  //Card converted mana cost
  document.querySelector(".cmc").textContent = data.cards[0].cmc;
}

testCard("Cancel");

async function insertTest() {
  const res = await fetch(
    `https://api.magicthegathering.io/v1/cards?name=shock`
  );
  const data = await res.json();

  document.getElementById(
    "testArea"
  ).innerHTML += `<img class="card-image" src="${data.cards[0].imageUrl}">`;

  console.log("Work?");
}

insertTest();

// Desired HTML insert of new card display
// `<div class="card-display">
//   <div class="card_image--container">
//       <img class="card-image" src="${data.cards[0].imageUrl}">
//   </div>
//   <div class="card_text--container">
//       <h3 class="card-title"></h3>
//       <span class="cmc"></span>
//       <p class="card-text"></p>
//       <span class="user-name"></span>
//   </div>
//   </div>`;

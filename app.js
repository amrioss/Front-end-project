var url = "https://rickandmortyapi.com/api";
$.get(`${url}/character`, (data) => {
  //   console.log(data);
  //   console.log(data.results[0]);
  //   for (var i = 0; i < data.results.length; i++) {
  //     console.log(data.results[i]);
  //     //     console.log(data.results[i].name)
  //   }
  for (var i = 0; i < data.results.length; i++) {
    var cardContainer = document.createElement("div");
    var carCon = document.createElement("div");
    var characterCards = document.createElement("div");
    characterCards.classList.add("card");
    var content = document.getElementsByClassName('content');
    document.body.append(cardContainer);
    cardContainer.classList.add("cardContainer");
    cardContainer.appendChild(characterCards);
    characterCards.innerHTML = `
      <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img src = '${data.results[i].image}' style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h1>${data.results[i].name}</h1>
      <p>STATUS: ${data.results[i].status}</p>
      <p>SPECIES: ${data.results[i].species}</p>
      <p>TYPE: ${data.results[i].type}</p>
      <p>GENDER: ${data.results[i].gender}</p>
    </div>
  </div>
  <div class="nameDisplay">
    <h2>${data.results[i].name}
</div>
      `;
  }
});

var url = "https://rickandmortyapi.com/api/character/?page=2";
$.get(`${url}`, (data) => {
  loadButton(data);
});

// console.log(data.results)

function loadButton(data) {
  var loadButton = document.createElement("button");
  loadButton.innerText = "Load More";
  loadButton.classList.add("loadButton");
  loadButton.addEventListener("click", function () {
    console.log(data.results);
    for (var i = 0; i < data.results.length; i++) {
      var cardContainer = document.createElement("div");
      var carCon = document.createElement("div");
      var characterCards = document.createElement("div");
      characterCards.classList.add("card");
      document.body.append(cardContainer);
      cardContainer.classList.add("cardContainer");
      cardContainer.appendChild(characterCards);
      characterCards.innerHTML = `
              <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
            <img src = '${data.results[i].image}' style="width:300px;height:300px;">
            </div>
            <div class="flip-card-back">
              <h1>${data.results[i].name}</h1>
              <p>STATUS: ${data.results[i].status}</p>
              <p>SPECIES: ${data.results[i].species}</p>
              <p>TYPE: ${data.results[i].type}</p>
              <p>GENDER: ${data.results[i].gender}</p>
            </div>
          </div>
          <div class="nameDisplay">
            <h2>${data.results[i].name}
        </div>
              `;
    }
  });
  document.body.append(loadButton);
}

// function createCards(data) {
//   data.array.forEach((result) => {
//     let card = document.createElement("div");
//     let image = document.createElement("img");
//     image.src = result.image;
//     let name = result.name;

//   });
// }

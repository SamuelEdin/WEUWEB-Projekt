let gameSearch = document.getElementById("gameSearch")
const games = document.getElementById("games")
const apiKey = "06d394ad6a8a4d5d9a70df22a3801804";

function search(){
  fetch(`https://rawg.io/api/games?token&key=${apiKey}&search=${gameSearch.value}`)
  .then(res => res.json())
  .then(data => { for (let index = 0; index < 20; index++) {
    games.innerHTML += `<div class="game">
  <img src="${data.results[index].background_image}" alt="${data.results[index].name}" class="game_img">
  <p class="game_p">${data.results[index].name}</p>
</div>`
  
}console.log(data)})
  .catch(error => console.error('Error:', error));


}
function hideTopSection() {
    var x = document.getElementById('TopSection');
    if (x.style.display === 'flex') {
      x.style.display = 'none';
    } else {
      x.style.display = 'none';
    }
  }

function hideInnerHTML() {
    var y = document.getElementsByClassName('trend');
    // var y = document.getElementById('trending_games')
    for (let index = 0; index < y.length; index++) {
        y[index].innerHTML=""
    }
}

document.addEventListener("keyup", (e) => {
    if(e.key === "Enter") {
        search()
        hideTopSection()
        hideInnerHTML()
    }

})

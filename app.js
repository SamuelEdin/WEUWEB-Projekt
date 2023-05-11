let gameSearch = document.getElementById("gameSearch")
const games = document.getElementById("games")
const apiKey = "06d394ad6a8a4d5d9a70df22a3801804";

// let showGame = getElementById("game")
// showGame.addEventListener("click", function (event) {
//   console.log("balls")
// })

function search(){
  fetch(`https://rawg.io/api/games?token&key=${apiKey}&search=${gameSearch.value}&page_size=32`)
  .then(res => res.json())
  .then(data => { 
    for (let index = 0; index < 32; index++) {
      let colorClass = '';
      if (data.results[index].metacritic == null) {
        data.results[index].metacritic = `-`
        colorClass ='white';
      }
    else if (data.results[index].metacritic > 70) {
      colorClass = 'green';
    } else if (data.results[index].metacritic > 35) {
      colorClass = 'yellow';
    } else {
      colorClass = 'red';
    } 
    
        games.innerHTML += `<div id="game">
    <div id="game-top-info">
        <div id="date">
          ${data.results[index].released}
        </div>
        <div class="metascore ${colorClass}">  
            ${data.results[index].metacritic}
        </div> 
    </div> 
    <img src="${data.results[index].background_image}" alt="${data.results[index].name}" class="game_img">
    <p class="game_p">${data.results[index].name}</p>
    </div>`
}

console.log(data)})
  .catch(error => console.error('Error:', error));


}
//Gör att top section försvinner när 'enter' trycks.
function hideTopSection() {
    var x = document.getElementById('TopSection');
    if (x.style.display === 'flex') {
      x.style.display = 'none';
    } else {
      x.style.display = 'none';
    }
  }

//Gör att innerHTML av class="trend" divarna försvinner när
//'enter' trycks.  
function hideInnerHTML() {
    var y = document.getElementsByClassName('trend');
    // var y = document.getElementById('trending_games')
    for (let index = 0; index < y.length; index++) {
        y[index].innerHTML=""
    }
}

//'enter' trycks.
 document.addEventListener("keyup", (e) => {
    if(e.key === "Enter") {
        search()
        hideTopSection()
        hideInnerHTML()
    }

})

window.addEventListener("load", (event) => {
    search()
})
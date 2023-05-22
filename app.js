let gameSearch = document.getElementById("gameSearch")
const games = document.getElementById("games")
const apiKey = "06d394ad6a8a4d5d9a70df22a3801804";

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
    
        games.innerHTML += `<div class="game" class="dick">
    <div class="game-top-info">
        <div class="date">
          ${data.results[index].released}
        </div>
        <div class="metascore ${colorClass}">  
            ${data.results[index].metacritic}
        </div> 
    </div> 
    <img src="${data.results[index].background_image}" alt="${data.results[index].name}" class="game_img">
    <p class="game_p">${data.results[index].name}</p>
    <div id="button_div">
      <a href="thankyou.html" target="_blank" class="download_btn">Direct Download (.zip)</a>
      <a href="BB.html" target="_blank" class="download_btn">BB Download Manager</a>
      </div>
    </div>` 
}
console.log(data)})
  .catch(error => console.error('Error:', error));

  // console.log(games.innerHTML)
  // let cock = document.getElementsByClassName('.dick');
  // let gameInfo = document.getElementById("gameInfo");
  // console.log(cock)
  // cock.forEach((game) => {
  //   console.log(game)
  //   game.style.backgroundColor = "red"
  //   game.addEventListener('click', (event) => {
  //     gameInfo.style.display = 'block';
  //     console.log("balls")
  //   });
  // });

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


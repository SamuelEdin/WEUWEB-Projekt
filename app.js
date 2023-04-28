const apiKey = "06d394ad6a8a4d5d9a70df22a3801804";
fetch(`https://rawg.io/api/games?token&key=${apiKey}`)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

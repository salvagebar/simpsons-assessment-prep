const episodeSelector = document.getElementById("episode-selector");

fetch(`https://api.sampleapis.com/simpsons/episodes`)
  .then((response) => response.json())
  .then((response) => {
    populateFormDropdown(response);
  })
  .catch((err) => console.error(err));

let populateFormDropdown = (episodes) => {
  console.log("!!!!!");
  for (const episode of episodes) {
    console.log(episode);

    let newOption = document.createElement("option");
    newOption.textContent = episode.name;
    newOption.value = episode.name;
    episodeSelector.append(newOption);
  }
};

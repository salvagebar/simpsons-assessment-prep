const episodeSelector = document.getElementById("episode-selector");
const submitButton = document.getElementById("submit-button");

fetch(`https://api.sampleapis.com/simpsons/episodes`)
  .then((response) => response.json())
  .then((response) => {
    populateFormDropdown(response);
  })
  .catch((err) => console.error(err));

let populateFormDropdown = (episodes) => {
  let counter = 0;

  for (const episode of episodes) {
    counter += 1;
    if (counter <= 13) {
      let newOption = document.createElement("option");
      newOption.textContent = episode.name;
      newOption.value = episode.name;
      episodeSelector.append(newOption);
    }
  }
};

console.log("The submit button:");
console.log(submitButton);

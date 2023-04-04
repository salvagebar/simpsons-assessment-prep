const episodeSelector = document.getElementById("episode-selector");
const submitButton = document.getElementById("submit-button");
const detailContainer = document.getElementById("episode-detail-container");

fetch(`https://api.sampleapis.com/simpsons/episodes`)
  .then((response) => response.json())
  .then((response) => {
    populateFormDropdown(response);
  })
  .catch((err) => console.error(err));

let episodeList = [];

let populateFormDropdown = (episodes) => {
  let counter = 0;
  for (const episode of episodes) {
    counter += 1;
    if (counter <= 13) {
      episodeList.push(episode);
      let newOption = document.createElement("option");
      newOption.textContent = episode.name;
      newOption.value = episode.name;
      episodeSelector.append(newOption);
    }
  }
};

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  detailContainer.innerHTML = ""; // clear the episode detail container between uses

  let episodeName = episodeSelector.value;
  let episode = findEpisodeByName(episodeName);
  let titleHeader = document.createElement("h3");
  titleHeader.textContent = episode.name;
  detailContainer.append(titleHeader);

  let description = document.createElement("p");
  description.textContent = episode.description;
  detailContainer.append(description);
});

let findEpisodeByName = (name) => {
  for (const episode of episodeList) {
    if (episode.name === name) {
      return episode;
    }
  }
};

const episodeSelector = document.getElementById("episode-selector");
const submitButton = document.getElementById("submit-button");
const detailContainer = document.getElementById("episode-detail-container");
const commentButton = document.getElementById("comment-submit-button");
const commentInput = document.getElementById("comment-input");
const commentList = document.getElementById("comment-list");

fetch(`https://api.sampleapis.com/simpsons/episodes`)
  .then((response) => response.json())
  .then((response) => {
    populateFormDropdown(response);
  })
  .catch((err) => console.error(err));

let episodeList = [];
let currentEpisode = null;

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
  currentEpisode = episode;
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

commentButton.addEventListener("click", (event) => {
  event.preventDefault();

  let newComment = document.createElement("li");
  newComment.innerHTML += `<strong>${currentEpisode.name}</strong> -- `;
  newComment.innerHTML += commentInput.value;
  commentList.append(newComment);
});

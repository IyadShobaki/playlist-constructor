const container = document.querySelector(".container");
const songsContainer = container.querySelector(".songs-container");
const noSongsElement = container.querySelector(".no-songs");

const addSongForm = container.querySelector("#add-song-form");
const title = document.querySelector("#song-title-input");
const artist = document.querySelector("#song-artist-input");

function renderHasSongs() {
  noSongsElement.classList.add("no-songs_hidden");
}

function addSong(artistValue, titleValue) {
  songsContainer.innerHTML += `
    <li class="song">
      <h3 class="song__artist">${artistValue}</h3>
      <p class="song__title">${titleValue}</p>
      <button type="button" class="song__button song__button_type_like"></button>
    </li>
  `;
}

addSongForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  addSong(artist.value, title.value);
  renderHasSongs();

  artist.value = "";
  title.value = "";
});

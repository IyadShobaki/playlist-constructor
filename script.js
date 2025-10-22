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
  // Create an <li> and give it the "song" class
  const songElement = document.createElement("li");
  songElement.classList.add("song");

  // Create song elements
  const artistElement = document.createElement("h3");
  artistElement.classList.add("song__artist");
  artistElement.textContent = artistValue;

  const titleElement = document.createElement("p");
  titleElement.classList.add("song__title");
  titleElement.textContent = titleValue;

  const likeButtonElement = document.createElement("button");
  likeButtonElement.classList.add("song__button", "song__button_type_like");
  likeButtonElement.setAttribute("type", "button");

  // Append the artist, title, and button elements to the song element
  songElement.append(artistElement, titleElement, likeButtonElement);

  songsContainer.append(songElement);
  /* songsContainer.innerHTML += `
    <li class="song">
      <h3 class="song__artist">${artistValue}</h3>
      <p class="song__title">${titleValue}</p>
      <button type="button" class="song__button song__button_type_like"></button>
    </li>
  `; */

  // Return the song element
  return songElement;
}

addSongForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  addSong(artist.value, title.value);
  renderHasSongs();

  artist.value = "";
  title.value = "";
});

"use strict";

var container = document.querySelector(".container");
var songsContainer = container.querySelector(".songs-container");
var noSongsElement = container.querySelector(".no-songs");
var addSongForm = container.querySelector("#add-song-form");
var title = document.querySelector("#song-title-input");
var artist = document.querySelector("#song-artist-input");

function renderHasSongs() {
  noSongsElement.classList.add("no-songs_hidden");
}

function addSong(artistValue, titleValue) {
  // Create an <li> and give it the "song" class
  var songElement = document.createElement("li");
  songElement.classList.add("song"); // Create song elements

  var artistElement = document.createElement("h3");
  artistElement.classList.add("song__artist");
  artistElement.textContent = artistValue;
  var titleElement = document.createElement("p");
  titleElement.classList.add("song__title");
  titleElement.textContent = titleValue;
  var likeButtonElement = document.createElement("button");
  likeButtonElement.classList.add("song__button", "song__button_type_like");
  likeButtonElement.setAttribute("type", "button"); // Append the artist, title, and button elements to the song element

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
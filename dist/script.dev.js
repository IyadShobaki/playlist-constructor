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
  likeButtonElement.setAttribute("type", "button");
  songsContainer.innerHTML += "\n    <li class=\"song\">\n      <h3 class=\"song__artist\">".concat(artistValue, "</h3>\n      <p class=\"song__title\">").concat(titleValue, "</p>\n      <button type=\"button\" class=\"song__button song__button_type_like\"></button>\n    </li>\n  "); // Return the song element

  return songElement;
}

addSongForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  addSong(artist.value, title.value);
  renderHasSongs();
  artist.value = "";
  title.value = "";
});
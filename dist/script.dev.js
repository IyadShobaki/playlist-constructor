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
  songsContainer.innerHTML += "\n    <li class=\"song\">\n      <h3 class=\"song__artist\">".concat(artistValue, "</h3>\n      <p class=\"song__title\">").concat(titleValue, "</p>\n      <button type=\"button\" class=\"song__button song__button_type_like\"></button>\n    </li>\n  ");
}

addSongForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  addSong(artist.value, title.value);
  renderHasSongs();
  artist.value = "";
  title.value = "";
});
"use strict";

var container = document.querySelector(".container");
var songsContainer = container.querySelector(".songs-container");
var noSongsElement = container.querySelector(".no-songs");
var songTemplate = document.querySelector("#song-template").content.querySelector(".song");
var addSongForm = container.querySelector("#add-song-form");
var title = document.querySelector("#song-title-input");
var artist = document.querySelector("#song-artist-input");

function renderHasSongs() {
  noSongsElement.classList.add("no-songs_hidden");
}

function addSong(artistValue, titleValue) {
  // Using song template
  var songElement = songTemplate.cloneNode(true);
  var artistElement = songElement.querySelector(".song__artist");
  artistElement.textContent = artistValue;
  var titleElement = songElement.querySelector(".song__title");
  titleElement.textContent = titleValue;
  songsContainer.append(songElement);
  return songElement;
}

addSongForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  addSong(artist.value, title.value);
  renderHasSongs();
  artist.value = "";
  title.value = "";
});
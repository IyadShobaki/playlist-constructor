"use strict";

var initialSongs = [{
  artist: "Young Marco",
  title: "Kalapa Garden"
}, {
  artist: "10cc",
  title: "I'm Not In Love"
}, {
  artist: "Rodrigo y Gabriela",
  title: "Tamacun"
}, {
  artist: "apolumni, Aleeray",
  title: "When It Gets Dark"
}, {
  artist: "crimson taupe",
  title: "siren"
}];
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
initialSongs.forEach(function (song) {
  //   console.log(song.artist);
  //   console.log(song.title);
  addSong(song.artist, song.title);
  renderHasSongs();
});
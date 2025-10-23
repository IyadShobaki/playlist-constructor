"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
var songTemplate = document.querySelector("#song-template").content.querySelector(".song");
var songsContainer = container.querySelector(".songs-container");
var noSongsElement = container.querySelector(".no-songs");
var addSongForm = container.querySelector("#add-song-form");
var title = document.querySelector("#song-title-input");
var artist = document.querySelector("#song-artist-input");
var clearPlaylistBtn = document.querySelector("#clear-playlist-btn");
clearPlaylistBtn.addEventListener("click", function () {
  var songs = _toConsumableArray(songsContainer.children);

  songs.forEach(function (song) {
    song.remove();
  });
  renderNoSongs();
});

function renderNoSongs() {
  noSongsElement.classList.remove("no-songs_hidden");
  clearPlaylistBtn.disabled = true;
}

function renderHasSongs() {
  noSongsElement.classList.add("no-songs_hidden");
  clearPlaylistBtn.disabled = false;
}

function renderSongElement(artist, title) {
  var songEl = createSongElement(artist, title);
  songsContainer.append(songEl);
  renderHasSongs();
}

function createSongElement(artist, title) {
  var songElement = songTemplate.cloneNode(true);
  var artistElement = songElement.querySelector(".song__artist");
  artistElement.textContent = artist;
  var titleElement = songElement.querySelector(".song__title");
  titleElement.textContent = title;
  var songLikeBtn = songElement.querySelector(".song__button_type_like");
  songLikeBtn.addEventListener("click", function (evt) {
    evt.target.classList.toggle("song__button_active");
  }); // Write your code here

  var songDeleteBtn = songElement.querySelector(".song__button_type_delete");
  songDeleteBtn.addEventListener("click", function () {
    songElement.remove();
  });
  return songElement;
}

addSongForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  renderSongElement(artist.value, title.value);
  artist.value = "";
  title.value = "";
});
initialSongs.forEach(function (song) {
  renderSongElement(song.artist, song.value);
});
const initialSongs = [
  { artist: "Young Marco", title: "Kalapa Garden" },
  { artist: "10cc", title: "I'm Not In Love" },
  { artist: "Rodrigo y Gabriela", title: "Tamacun" },
  { artist: "apolumni, Aleeray", title: "When It Gets Dark" },
  { artist: "crimson taupe", title: "siren" },
];

const container = document.querySelector(".container");

const songTemplate = document
  .querySelector("#song-template")
  .content.querySelector(".song");
const songsContainer = container.querySelector(".songs-container");
const noSongsElement = container.querySelector(".no-songs");

const addSongForm = container.querySelector("#add-song-form");
const title = document.querySelector("#song-title-input");
const artist = document.querySelector("#song-artist-input");

function renderHasSongs() {
  noSongsElement.classList.add("no-songs_hidden");
}

function renderSongElement(artist, title) {
  const songEl = createSongElement(artist, title);
  songsContainer.append(songEl);
  renderHasSongs();
}

function createSongElement(artist, title) {
  const songElement = songTemplate.cloneNode(true);

  const artistElement = songElement.querySelector(".song__artist");
  artistElement.textContent = artist;

  const titleElement = songElement.querySelector(".song__title");
  titleElement.textContent = title;

  const songLikeBtn = songElement.querySelector(".song__button_type_like");
  songLikeBtn.addEventListener("click", function (evt) {
    evt.target.classList.toggle("song__button_active");
  });

  // Write your code here
  const songDeleteBtn = songElement.querySelector(".song__button_type_delete");
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

initialSongs.forEach((song) => {
  renderSongElement(song.artist, song.value);
});

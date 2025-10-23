const initialSongs = [
  { artist: "Young Marco", title: "Kalapa Garden" },
  { artist: "10cc", title: "I'm Not In Love" },
  { artist: "Rodrigo y Gabriela", title: "Tamacun" },
  { artist: "apolumni, Aleeray", title: "When It Gets Dark" },
  { artist: "crimson taupe", title: "siren" },
];

const container = document.querySelector(".container");
const songsContainer = container.querySelector(".songs-container");
const noSongsElement = container.querySelector(".no-songs");
const songTemplate = document
  .querySelector("#song-template")
  .content.querySelector(".song");

const addSongForm = container.querySelector("#add-song-form");
const title = document.querySelector("#song-title-input");
const artist = document.querySelector("#song-artist-input");

function renderHasSongs() {
  noSongsElement.classList.add("no-songs_hidden");
}

function addSong(artistValue, titleValue) {
  // Using song template
  const songElement = songTemplate.cloneNode(true);

  const artistElement = songElement.querySelector(".song__artist");
  artistElement.textContent = artistValue;

  const titleElement = songElement.querySelector(".song__title");
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

initialSongs.forEach((song) => {
  //   console.log(song.artist);
  //   console.log(song.title);
  addSong(song.artist, song.title);
  renderHasSongs();
});

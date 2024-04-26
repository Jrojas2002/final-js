function searchChange(event) {
    const title = event.target.value;
    getMovie(title);
    inputData(title);
}

const title = localStorage.getItem("title");
let resultData = [];

// search movie with input

async function inputData() {
    const result = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=ee7c6501&s=${title}`);
    return await result.json();
}

async function showMovies() {
    resultData = await inputData(title);
    setTimeout(() => {
        moviesEl.innerHTML = resultData.Search.map((movie) => movieTitleHTML(movie)).slice(0, 9).join("");
        }, 1500);
}

showMovies(title);
 
function movieTitleHTML(movie) {
    return  `<div class="movie">
    <figure class="movie__img--wrapper">
        <img class="movies__img" src="${movie.Poster}" alt="">
    </figure>
    <div class="movie__title">
        <b class="blue">Title:</b> ${movie.Title}
    </div>
    <div class="movie__rating">
        <b class="blue">imdbID:</b> ${movie.imdbID}
    </div>
    <div class="movie__year">
        <b class="blue">Released Year:</b> ${movie.Year}
    </div>
    </div>`;
}

// sort movies

function filterChange(event) {
    filterMovie(event.target.value);
}

async function filterMovie(filter) {
    // if (!resultData.Search) return;

  if (filter === 'OLD_TO_NEW') {
        resultData.Search.sort((a, b) => a.Year - b.Year);
  } else if (filter === 'NEW_TO_OLD') {
        resultData.Search.sort((a, b) => b.Year - a.Year);
  };
  moviesEl.innerHTML = resultData.Search.map((movie) => movieTitleHTML(movie)).slice(0, 9).join("");
}

// title innerHTML

function addToHeading() {
const list = document.getElementById("results");
list.innerHTML += `" ${title} "`;
}

addToHeading()
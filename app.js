const moviesEl = document.querySelector(".movies");

// burger menu

function openMenu() {
  document.body.classList += "menu--open";
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

// loading spinner

function loadingState() {
    const loadEl = document.querySelector(".loading");
    loadEl.classList += ' loading__spinner';
}

// movies data

async function data(filter) {
    const movies = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=ee7c6501`);
    const moviesData = await movies.json();

    moviesEl.innerHTML = moviesData.Search.map((movie) => movieHTML(movie)).join("");
}


function movieHTML(movie) {
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

// save input

function getMovie(title) {
    localStorage.setItem("title", title);
    var firstPathnameSegment = window.location.pathname.split('/')[1];
    window.location.href = `${window.location.origin}/${firstPathnameSegment}/movies.html`;
}
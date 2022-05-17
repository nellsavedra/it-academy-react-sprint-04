// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((movie) => movie.director);
  // console.log('Ex. 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((movie) => movie.director == director);
  // console.log('Ex. 2 ->', result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let result = getMoviesFromDirector(array, director);
  // console.log(result);
  let average = result.reduce((prev, curr) => prev.score + curr.score);
  average = Number((average / result.length).toFixed(2));
  // console.log('Ex. 3 ->', average);
  return average;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let movieTitles = array.map((movie) => movie.title);
  movieTitles.sort((prev, curr) => (prev > curr ? 1 : -1));
  movieTitles = movieTitles.splice(0, 20);
  return movieTitles;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const movies = JSON.parse(JSON.stringify(array));

  const moviesOrdered = movies.sort((prev, curr) => {
    if (prev.year == curr.year) {
      return prev.title.replace(/\s/g, '').toLowerCase() >
        curr.title.replace(/\s/g, '').toLowerCase()
        ? 1
        : -1;
    }
    return prev.year - curr.year;
  });
  // console.log(moviesOrdered);
  return moviesOrdered;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
	let result = array.map(movie => movie.director);

	// console.log('Ex. 1 ->', result);

	return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
	let result = array.filter(movie => movie.director == director);

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
	let movieTitles = array.map(movie => movie.title);
	movieTitles.sort((prev, curr) => (prev > curr ? 1 : -1));
	movieTitles = movieTitles.splice(0, 20);

	// console.log('Ex. 4 ->', movieTitles);

	return movieTitles;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
	const movies = array.map(e => ({ ...e }));

	const moviesOrdered = movies.sort((prev, curr) => {
		if (prev.year == curr.year) {
			return prev.title.replace(/\s/g, "").toLowerCase() > curr.title.replace(/\s/g, "").toLowerCase() ? 1 : -1;
		}
		return prev.year - curr.year;
	});

	// console.log('Ex. 5 ->', moviesOrdered);

	return moviesOrdered;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
	const moviesCat = array.filter(movie => {
		return movie.genre.length == 1 && movie.genre.includes(category) == true && movie.score > 1;
	});

	// console.log(moviesCat);

	let averageGenre = 0;
	for (let movie of moviesCat) {
		averageGenre += movie.score;
	}
	averageGenre = Number((averageGenre / moviesCat.length).toFixed(2));
	
	// console.log('Ex. 6 ->', averageGenre);
	
	return averageGenre;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
	const movies = array.map(movie => ({ ...movie }));
	
	// console.log(movies);
	
	for(let movie of movies) {
		let duration = movie.duration,
			hours = Number(duration.match(/\d+(?=h)/g)),
			minutes = Number(duration.match(/\d+(?=min)/g)),
			totalMinutes = (hours * 60) + minutes;
			
		// console.log(movie, duration, hours, minutes, totalMinutes);
		
		movie.duration = totalMinutes;
		
		// console.log(movie);
	}
	
	// console.log(movies);
	
	return movies;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
	
	const movies = array.filter(movie => movie.year == year);
	
	let bestOfTheYear = movies.sort((a, b) => b.year - a.year);
		bestOfTheYear = [bestOfTheYear[0]];
		
	// console.log(bestOfTheYear);
	
	return bestOfTheYear;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== "undefined") {
	module.exports = {
		getAllDirectors,
		getMoviesFromDirector,
		moviesAverageOfDirector,
		orderAlphabetically,
		orderByYear,
		moviesAverageByCategory,
		hoursToMinutes,
		bestFilmOfYear,
	};
}

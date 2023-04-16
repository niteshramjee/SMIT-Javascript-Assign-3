// Load movie data from JSON file
const movies = [
	{
		title: "The Dark Knight",
		genre: "Action",
		rating: 9,
		year: 2008
	},
	{
		title: "Inception",
		genre: "Science Fiction",
		rating: 8.8,
		year: 2010
	},
	{
		title: "The Godfather",
		genre: "Drama",
		rating: 9.2,
		 year: 1972
	},
	{
		title: "Pulp Fiction",
		genre: "Crime",
		rating: 8.9,
		year: 1994
	}
];

// Function to filter movies based on user preferences
function filterMovies(genre, rating, year) {
	const filteredMovies = movies.filter(movie => {
		if (genre && movie.genre.toLowerCase() !== genre.toLowerCase()) {
			return false;
		}
		if (rating && movie.rating < rating) {
			return false;
		}
		if (year && movie.year !== year) {
			return false;
		}
		return true;
	});
	return filteredMovies;
}

// Function to display movie recommendations
function displayRecommendations(movies) {
	const recommendationsDiv = document.getElementById("recommendations");
	recommendationsDiv.innerHTML = "";
	if (movies.length === 0) {
		recommendationsDiv.innerHTML = "No recommendations found.";
	} else {
		const ul = document.createElement("ul");
		movies.forEach(movie => {
			const li = document.createElement("li");
			li.innerHTML = movie.title;
			ul.appendChild(li);
		});
		recommendationsDiv.appendChild(ul);
	}
}

// Event listener for submit button
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", () => {
	const genre = document.getElementById("genre").value;
	const rating = document.getElementById("rating").value;
	const year = document.getElementById("year").value;
	const filteredMovies = filterMovies(genre, rating, year);
	displayRecommendations(filteredMovies);
});

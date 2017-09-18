var movies = [{
	// NB******** objects properties get init using : 
	// in java its = but in js its :
	title : "Movie1",
	hasWatched : true,
	rating : 6
},
{
	title : "Movie2",
	hasWatched : false,
	rating : 7
}
]

movies.forEach(function(movie){

	console.log(buildString(movie));

})

function buildString(movie){

	var result = "You have"

	if(movie.hasWatched === true){
		result+=" watched"
	}
	else{
		result+=" not watched"
	}

	result+= " " + movie.title + " - " + movie.rating + " stars."

	return result
}
'use strict';

var app = {};
var year = {};
//store their input in a VAR (set default to 2016)
// pass that variable in our getdata method -in primary_release_year key
//make multiple ajax calls for pages 1 and 2
//get data back and put all the movie objects in one array
// reorganize objects in array from highest average
//then extract the top 10 highest average and put them in another array
// create an array of top 10 movie IDs
// use /movie/[id]/credits/ endpoint to take top 3 cast from all 10
//films using 10 ajax calls

//write a function to display movie posters
//"https://image.tmdb.org/t/p/original/" + object.poster_path
//use on click function on movie poster >> expand display more info box
//populate/display title, vote_average, poster_path, overview, cast (from cast array)

// USERS FORM SELECTION & SUBMIT  //
//-------------------------------//

app.init = function () {

	app.getData('2016');

	$('select').on('change', function () {
		// grab user choice, store in a variable
		var year = $('select').val();

		app.getData(year);
		// $('#movieBox').empty();
	});
};

app.getData = function (year) {
	$.ajax({
		url: 'http://api.themoviedb.org/3/discover/movie',
		method: 'GET',
		dataType: 'jsonp',
		data: {
			api_key: 'f43968b7420dc8dd5dc5be75cb2d3725',
			sort_by: 'vote_count.desc',
			page: '1',
			primary_release_year: year

		}
	}).then(function (data) {
		// console.log(data);
		console.log(data.results);
		var movies1 = data.results;
	});

	$.ajax({
		url: 'http://api.themoviedb.org/3/discover/movie',
		method: 'GET',
		dataType: 'jsonp',
		data: {
			api_key: 'f43968b7420dc8dd5dc5be75cb2d3725',
			sort_by: 'vote_count.desc',
			page: '2',
			primary_release_year: year
		}
	}).then(function (data) {
		// console.log(data);
		console.log(data.results);
		var movies2 = data.results;
	});
};

$(document).ready(function () {
	app.init();
});
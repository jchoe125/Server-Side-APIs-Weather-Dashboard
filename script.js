var apiKey = 'd1d912ae36a8e9fea06b05de020cfbae';
var timestamp = moment().format("MMMM Do, YYYY");

//current weather for main weather card; one call for future forecast cards

var searchHistory = JSON.parse(localStorage.getItem("pastSearches")) || [];

//call function to pull past searches from localstorage and display them along left side of page
init();

$("#search-button").on("click", function() {
    var searchInput = $("#search-value").val();
    $("#search-value").val("")
    weatherSearch(searchInput);
    saveSearch(searchInput);
})

//adds listener to entire div and if a button from a past search is clicked, the text within becomes the new search input
$("#history").on("click", function(event) {
    newInput = $(event.target).text()
    weatherSearch(newInput)
})
const searchMovies = event => {
    event.preventDefault();
    const form_data = $('form').serialize().replace("movies=", "");

    const showMoviesResult = response => {
        response.Search.forEach(movieResult => {
            const paraNode = $("<p/>");
            paraNode.appendTo("#server-results");
            const linkMoive = $("<a/>", {
                html: movieResult.Title,
                href: `https://www.imdb.com/title/${movieResult.imdbID}`,
                target: "_blank"
            });
            linkMoive.appendTo(paraNode);
        });
    };
    
    $.ajax({
        url: 'http://omdbapi.com/',
        data: {
            s: form_data,
            apikey: '2f6435d9'
        },
        method: 'get',
    }).done(showMoviesResult);
}

$(document).ready(function () {
    $("#search_form").submit(searchMovies);
});
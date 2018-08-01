$(document).ready(function () {
    $("#search_form").submit(function (event) {
        event.preventDefault();
        var form_data = $('form').serialize().replace("movies=", "");
        $.ajax({
            url: `http://omdbapi.com/?apikey=2f6435d9&s=${form_data}`,
            type: 'get',
        }).done(function (response) {
            var result = document.querySelector('#server-results');
            response.Search.forEach(movieResult => {
                // result.innerHTML += movieResult.Title + '</br>';
                var paraNode = document.createElement("p");
                var linkMoive = document.createElement("a");
                linkMoive.href = `https://www.imdb.com/title/${movieResult.imdbID}`;
                linkMoive.target = "_blank";
                linkMoive.textContent = movieResult.Title;
                result.appendChild(paraNode);
                paraNode.appendChild(linkMoive);
            })
        });
    });
});
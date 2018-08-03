const searchGiphys = (event, page) => {
    event.preventDefault();
    const form_data = $('form').serialize().replace("giphys=", "");

    const showGiphysResult = response => {
        response.data.forEach(giphyResult => {
            const praNode = $("<p/>");
            const imgNode = $("<img/>", {
                src: giphyResult.images.fixed_width.url,
                height: giphyResult.images.fixed_width.height,
                width: giphyResult.images.fixed_width.width,
                alt: giphyResult.title
            });
            imgNode.appendTo(praNode);
            praNode.appendTo("#server-results");
        });
    };

    $.ajax({
        url: 'http://api.giphy.com/v1/gifs/search',
        data: {
            q: form_data,
            api_key: '8JzXNFD61ftXdRuZHF5Br9WRUdczFGyf',
            limit: 10,
            offset: page
        },
        method: 'get',
    }).done(showGiphysResult);
}


$(document).ready(() => {
    $("#search_form").submit(() => { searchGiphys(event, 0) });
    let pageNumber = 10;
    $(window).scroll(() => {
        if ($(window).scrollTop() == $(document).height() - $(window).height()) {
            searchGiphys(event, pageNumber);
            pageNumber += 10;
        }
    })
});




const setColor = event => {
  event.preventDefault();
  const userColor = $('.color_selector').find('input[name="color"]').val();
  $('.selected_color').css("background-color", userColor);
}

const enterKey = event => {
  if (event.keyCode == 13) {
    $(this).trigger("enterKey");
  }
}

const changeColor = (event) => {
  console.log("1 here");
  event.stopPropagation();
  if ($(event.target).attr('class') === 'square') {
    const userInputColor = $('.selected_color').css('background-color');
    if (userInputColor != 'rgba(0, 0, 0, 0)') {
      $(event.target).children().css("display", 'none');
      $(event.target).css('background-color', userInputColor);
    }
    else {
      $(event.target).css('background-color', '');
      $(event.target).css("background-size", '');
      $(event.target).children().css("display", '');
    }
  }
}

const setPoster = event => {
  event.preventDefault();
  const userPoster = $('.color_selector').find('input[name="poster"]').val();
  const setPosterAsBackground = response => {
    $('.selected_color').css('background-color', '');
    const imgBackground = $('<img/>', {
      src: response.Poster,
      css: {
        'max-width': '100%',
        'max-height': '100%',
        'display': 'none'
      }
    });
    imgBackground.appendTo('.square');

  }
  $.ajax({
    url: 'http://omdbapi.com/',
    data: {
      t: userPoster,
      apikey: '2f6435d9'
    },
    method: 'get',
  }).done(setPosterAsBackground);
}


$(document).ready(function () {
  const allDivs = $('<div/>', {
    'class': 'all_squares',
    css: {
      'display': 'grid',
      'grid-template-columns': 'repeat(30, 1fr)',
      'grid-gap': '5px',
      'margin': '0 auto',
      'opacity': '1'
    }
  });

  for (var i = 1; i <= 1000; i++) {
    const divSquare = $('<div/>', {
      'class': 'square',
      css: {
        'width': '20px',
        'height': '20px',
        'border': '1px solid black'
      }
    });
    divSquare.appendTo(allDivs);
  }
  allDivs.appendTo('.color_selector');

  $('#color_selector_form').submit(setColor);
  $('#color_selector_form').bind("enterKey", setColor);
  $('#color_selector_form').keyup(enterKey);
  $(allDivs).mouseover(changeColor);
  $('#poster_selector_form').submit(setPoster);
});
const setColor = event => {
  event.preventDefault();
  const form_data = $('form').serialize().replace("color=", "");
  $('.selected_color').css("background-color", form_data);
}

const enterKey = event => {
  if (event.keyCode == 13) {
    $(this).trigger("enterKey");
  }
}

const changeColor = event => {
  event.stopPropagation();
  if ($(event.target).attr('class') === 'square'){
    const userInputColor = $('.selected_color').css('backgroundColor');
    $(event.target).css('background-color', userInputColor);
  }
}


$(document).ready(function () {
  const allDivs = $('<div/>', {
    'class': 'all_squares',
    css:{
      'display': 'grid',
      'grid-template-columns': 'repeat(30, 1fr)',
      'grid-gap': '5px'
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
  allDivs.appendTo('body');

  $('#color_selector_form').submit(setColor);
  $('#color_selector_form').bind("enterKey", setColor);
  $('#color_selector_form').keyup(enterKey);
  $(allDivs).mouseover(changeColor);
});
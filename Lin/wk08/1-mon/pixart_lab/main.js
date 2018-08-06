const setColor = event => {
  event.preventDefault();
  const form_data = $('form').serialize().replace("color=", "");
  $('.selected_color').css("background", form_data);
}




$(document).ready(function () {
  $('#color_selector_form').submit(setColor);
  $('#color_selector_form').bind("enterKey", setColor);
  $('#color_selector_form').keyup(function (e) {
    if (e.keyCode == 13) {
      $(this).trigger("enterKey");
    }
  });
});
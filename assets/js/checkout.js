$(document).ready(function(){
  // Get started here!

  $('.order-form').on('submit', function(event){
    event.preventDefault();
  $('input[required]').parent().removeClass('has-error');
  $('.error-message').hide();
    // 1) Grab all of the required inputs
    var requiredFields = $('input[required]');
    // 2) Loop over each of those inputs and check if they're empty (.val().length)
    var isValid = true;
    $(requiredFields).each(function(){
      // This function runs for every input
      if ($(this).val().length === 0) {
        isValid = false;
        $(this).parent().addClass('has-error')
        $('.error-message').show()
      } else {
        $(this).parent().removeClass('has-error');
      }

    });
    if (isValid){
      $('.error-message').hide()
      alert('You completed the form');
    } else {
      $('.error-message').show();
    }

      // 3) If the current input is empty, consider the form to be invalid and give .has-error class to the input

    // 4) IF there's one input with the class .has-error, we can assume that the form is invalid and we can show a message to the user
  });
});

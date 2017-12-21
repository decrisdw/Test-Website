
$(document).ready(function(){
	
	// Puts the text field IDs into an array and clears their fields on page load
	var text_field_IDs = ["bench_input_text", "squat_input_text", "deadlift_input_text"];
	
	for (i = 0; i < text_field_IDs.length; i++) {	
		document.getElementById(text_field_IDs[i]).value = "";	
	}
	
	// Sets the example text
	//$('.bench_weight_text').text('300');
	//$('.squat_weight_text').text('350');
	//$('.deadlift_weight_text').text('450');

	// Checks if a lift checkbox is checked
	$('.checkbox_label input').prop('checked', false);
	
	$('.checkbox_label input').change(function() {
		var input_ID = $(this).attr('id');
		var lift_string = input_ID.substr(0, input_ID.indexOf('_'));
		
		if($(this).is(':checked')) {		
			$('#'+lift_string+'_inputs_container').css({'display':'block'});
		}
		else {
			$('#'+lift_string+'_inputs_container').css({'display':'none'});
		}
	});
	
	// Handles the submit button
	$('.lift_form').submit(function( event ) {
		
		var submitted_ID = $(this).attr('id');
		var submitted_string = submitted_ID.substr(0, submitted_ID.indexOf('_'));
		
		// Get the inputted squat value
		var lift_input = $('#' + submitted_ID + ' .form-control').val();
		
		// Set the inputted squat value
		$('.' + submitted_string + '_weight_text').text(lift_input);
		
		event.preventDefault();
		
	});
	
	/**$('#squat_input_text').keypress(function (e) {
		//if the letter is not digit then display error and don't type anything
		if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {

		//display error message
		$("#errmsg").html("Digits Only").show().fadeOut("slow");

			return false;
		}
	**/
	
}); 

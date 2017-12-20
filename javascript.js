$(document).ready(function(){
	
	// Sets the example text
	$('.bench_weight_text').text('300');
	//$('.squat_weight_text').text('350');
	$('.deadlift_weight_text').text('450');

	// Checks if the squat checkbox is checked
	$('#squat_checkbox').prop('checked', false);
	$('#squat_checkbox').change(function() {
		if($(this).is(':checked')) {
			$('.squat_inputs_container').css({'display':'block'});
		}
		else {
			$('.squat_inputs_container').css({'display':'none'});
		}
	});
	
	// Handles the submit button
	$('#squat_input_button').submit(function( event ) {
		
		// Get the inputted squat value
		var squatInput = $('#squat_input_text').val();
		
		// Set the inputted squat value
		$('.squat_weight_text').text(squatInput);
		
		event.preventDefault();
		
	});
	
	$('#squat_input_text').keypress(function (e) {
		//if the letter is not digit then display error and don't type anything
		if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {

		//display error message
		$("#errmsg").html("Digits Only").show().fadeOut("slow");

			return false;
		}
	});
	
}); 

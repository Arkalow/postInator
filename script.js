$(document).ready(function() {


	function convertStringToJson(string){
		return jQuery.parseJSON(string)
	}

	/**
	 * Send request
	 */
	function send(param){
		$.post(
			$('#url').val(), 
			param 
		).done(function(data) {

			console.log("success")
			console.log(data)
			$('#output').val(JSON.stringify(data))
		})
		.fail(function(data) {
			$('#output').val(JSON.stringify(data))
		})
	}

	/**
	 * Listener button
	 */
	$('#send').click(function(){
		var post = jQuery.parseJSON($('#input').val())
		send(post)
	})

});
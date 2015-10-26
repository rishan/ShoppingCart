$(document).ready(function(){
	
	$.ajax({
		  url:"/getErrorMsg",
		  success: function(data){ 
			  $("#login-warning").append(data);
		  }
	});
	
    $("#recover-btn").click(function(){
		var email = $('#recovery-email').val();
	    if(email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/))
	    {
	    	$(".modal-title").hide();
	    	$("#recovery-email").hide();
	    	$("#recover-btn").hide();
	        $('#recovsuccess').show();
	        $("#recovfail").hide();
	    }
	    else{
	    	$("#recovsuccess").hide();
	    	$("#recovfail").show();
	    	
	    }
    });
});



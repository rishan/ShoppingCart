$(document).ready(function(){
	//$('#login-warning').hide();
//	$("#login-btn").click(function(){
//		var mail=$('#login-userid').val();
//		var password=$('#login-pwd').val();
//		if(mail=="rishan" && password=="rishan"){
//			$(".login-message").hide();
//			$.post("/success");
//		    }
//	    else{
//	    	//$(".login-message").show();
//	    	//e.preventDefault();
//	    	console.log("userID: rishan");
//	    	console.log("password: rishan");
//			}
//    });
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
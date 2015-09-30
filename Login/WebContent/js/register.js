$(document).ready(function(){
	$('#reg-cnfpsw, #reg-psw').keyup(function(){
		var password=$('#reg-psw').val();
		var confirmpassword=$('#reg-cnfpsw').val();
		if(password!=confirmpassword){
			//$(".pswd-error").show();
			//$("#password-submit").attr('disabled','disabled');
		}
		else{
			//$(".pswd-error").hide();
			//$("#password-submit").removeAttr('disabled');
		}
	});
	$(".password-submit").click(function(){
		var password=$('#reg-psw').val();
		var confirmpassword=$('#reg-cnfpsw').val();
		if(password!=confirmpassword){
			$(".psw-error").show();
		}
		else{
			$(".psw-error").hide();
		}
	});
	
});
 
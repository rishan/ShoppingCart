<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Logout</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="icon" href="./images/logo.jpg">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
</head>
<body style="background-image: url("../images/back2.jpg");background-size: cover;">

<nav class="navbar navbar-default navbar-inverse"
		style="opacity:0.8;position:fixed;width:100%">
	<div class="container" style="padding-top: 10px; padding-bottom: 10px;">
		<div class="navbar-header ">
			<button type="button" class="navbar-toggle" data-toggle="collapse"
				data-target="#navbar-collapse">
				<span class="icon-bar"></span> <span class="icon-bar"></span> <span
					class="icon-bar"></span>
			</button>
			<img src="../images/logo.jpg" alt="logo.jpg" width="20%" height="auto"
				class="pull-left" style="padding-right: 5px"> <a
				href="Home.html" class="navbar-brand" style="color: white;"><b>CoolStuff</b></a>
		</div>

		<div id="navbar-collapse" class="collapse navbar-collapse">
			<ul class="nav navbar-nav navbar-right">
				<li>Products</li>
				<li>Cool Stuff Team</li>
				<li>Fashion</li>
				<li>News</li>
				<li>Dealers</li>
			</ul>
		</div>
	</div>
	</nav>
	
	<div class="container-fluid text-center">
		<h3 style="padding-top: 20%">
			You have logged out successfully</h3>
		<h5 style="padding-top: 10%">
			Click <a href="Login.jsp">here</a> to redirect to our login
			page
		</h5>
		<%  
            session.invalidate(); 
		%>
	</div>
</body>
</html>
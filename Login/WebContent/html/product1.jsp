<%@ page import="org.apache.catalina.ant.SessionsTask"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="com.cart.model.ShoeProduct"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cool-Shop</title>
    <link rel="icon" href="../images/logo.jpg">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.5/slick.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.5/slick-theme.min.css">
    <link rel="stylesheet" type="text/css" href="../css/product1.css">
    
    
</head>
<body>
	<nav class="navbar navbar-default navbar-inverse" style="opacity:0.8;position:fixed;width:100%;z-index:30">
		<div class="container" style="padding-top:10px; padding-bottom:10px;">
			<div class="navbar-header ">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<img src="../images/logo.jpg" alt="logo.jpg" width="20%" height="auto" class="pull-left hidden-xs" style="padding-right:5px">
				<a href="shop.html" class="navbar-brand" style="color: white;"><b>CoolStuff</b></a>
			</div> 
			
			<div id="navbar-collapse" class="collapse navbar-collapse">
				<ul class="nav navbar-nav navbar-right">
					<li><a href="const.html">What's Cool</a></li>
					<li ><a href="const.html">Trending</a></li>
					<li ><a href="const.html">Wishlist</a></li>
					<li><a href="const.html">Orders</a></li>
					<li><a href="Cart.html">Cart</a></li>
					<li><a href="../html/Logout.jsp">Logout</a></li>
				</ul>
			</div>
		</div>
	</nav>
	<br><br><br>
	
	<%
	ShoeProduct shoeproduct=(ShoeProduct)request.getSession().getAttribute("clickedProduct");
	
	//System.out.println("bla bla "+request.getSession().getAttribute("clickedProduct"));
	//System.out.println(shoeproduct.getProductID());
	%>
	
	<div id="product_data">
	<div class="product-description-container container-fluid">
        <div class="product-description_carousel col-sm-8">
            <div class="slickOuterCarousel lazy">
                <div>
                    <div class="carousel slide article-slide" id="article-photo-carousel" data-ride="carousel" data-interval="false">
                        <!-- Wrapper for slides -->
                        <div class="carousel-inner cont-slider">
                        	<span id="productID" style="display:none"><%=shoeproduct.getProductID()%></span>
                            <div class="item active">
                                <img alt="" title="" src="<%=shoeproduct.getProductimage()%>" class="car-images">
                            </div>
                            <div class="item">
                                <img alt="" title="" src="<%=shoeproduct.getProductimage2()%>" class="car-images">
                            </div>
                            <div class="item">
                                <img alt="" title="" src="<%=shoeproduct.getProductimage3()%>" class="car-images">
                            </div>
                            <div class="item">
                                <img alt="" title="" src="<%=shoeproduct.getProductimage4()%>" class="car-images">
                            </div>
                            <div class="item">
                                <img alt="" title="" src="<%=shoeproduct.getProductimage5()%>" class="car-images">
                            </div>
                            <div class="item">
                                <img alt="" title="" src="<%=shoeproduct.getProductimage6()%>" class="car-images">
                            </div>
                        </div>
                        <!-- Indicators -->
                        <ol class="carousel-indicators hidden-xs">
                            <li class="active" data-slide-to="0" data-target="#article-photo-carousel">
                                <img alt="" src="<%=shoeproduct.getProductimage()%>">
                            </li>
                            <li class="" data-slide-to="1" data-target="#article-photo-carousel">
                                <img alt="" src="<%=shoeproduct.getProductimage2()%>">
                            </li>
                            <li class="" data-slide-to="2" data-target="#article-photo-carousel">
                                <img alt="" src="<%=shoeproduct.getProductimage3()%>">
                            </li>
                            <li class="" data-slide-to="3" data-target="#article-photo-carousel">
                                <img alt="" src="<%=shoeproduct.getProductimage4() %>">
                            </li>
                            <li class="" data-slide-to="4" data-target="#article-photo-carousel">
                                <img alt="" src="<%=shoeproduct.getProductimage5() %>">
                            </li>
                            <li class="" data-slide-to="5" data-target="#article-photo-carousel">
                                <img alt="" src="<%=shoeproduct.getProductimage6()%>">
                            </li>
                        </ol>
                        <a class="carousel-control left " href="#article-photo-carousel" data-slide="prev">
                            <span class="glyphicon glyphicon-chevron-left"></span>
                        </a>
                        <a class="carousel-control right" href="#article-photo-carousel" data-slide="next">
                            <span class="glyphicon glyphicon-chevron-right"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="product_details_sidebar col-sm-4">
            <h4><%=shoeproduct.getDescription()%></h4>
            <div class="options col-sm-10 no-padding">
                <div class="review">
                    <div class="product_rating col-xs-12">
                        <img src="../images/blue-star.png">
                        <img src="../images/blue-star.png">
                        <img src="../images/blue-star.png">
                        <img src="../images/blue-star.png">
                        <img src="../images/blue-star.png">
                        <span class="no_of_reviews"><%=shoeproduct.getNoreviews()%></span>
                        <span style="border-left: 1px solid blue;padding: 0px 2px;"></span>
                        <a href="#"> Write a review </a>
                    </div>
                </div>
                <div class="stock_delivery">
                    <div class="product_availability col-xs-12 no-padding">
                        <span class="availability">Availability: <span class="instock"><%=shoeproduct.getAvailability()%></span></span>
                        <span class="delevierydays">Delivered in 3-5 days</span>
                    </div>
                </div>
                <table class="table row hidden-xs" style="margin-top:15px">
                    <tr>
                        <th>Unit Price</th>
                        <th>Discount</th>
                        <th>Total Price</th>
                    </tr>
                    <tr>
                        <td>₹ <%=shoeproduct.getUnitPrice() %></td>
                        <td>₹ <%=shoeproduct.getDiscount()%></td>
                        <td>₹ <%=shoeproduct.getPrice()%></td>
                    </tr>
                </table>
                <div class="pincode">
                    <div class="pin col-xs-10 no-padding">
                        <div class="input-group">
                            <div id="pin-check" class="input-group">
                                <input type="text" class="form-control"  pattern="[0-9]{6}" maxlength="6"  placeholder="Pincode">
                                <span class="input-group-btn"><button id="check" type="button" class="btn btn-default">CHECK</button></span>
                            </div>
                            <span class="text-center" id="pin-ok" style="display:none"><span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>Available at your location</p></span>
                        </div>
                    </div>
                </div>
                <div class="buy">
                    <div class="col-sm-12 col-xs-12 no-padding">
                        <a id="add2cart" class="label label-primary col-sm-5 col-xs-5 no-border-radius ">ADD TO CART</a>
                        <a id="added2cart" class="label label-success col-sm-5 col-xs-5 no-border-radius ">ADDED TO CART</a>
                        <a id="add2wishlist" class="label label-primary col-sm-5 col-xs-5 col-sm-offset-2 col-xs-offset-2 no-border-radius">ADD TO WISHLIST</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <h3> Specifications for <%=shoeproduct.getDescription()%></h3>
        <table class="table table-bordered">
            <tbody>
                <tr>
                    <th class="info" colspan="2">General</th>
                </tr>
                <tr>
                    <td>Ideal For</td>
                    <td> <%=shoeproduct.getIdealfor()%></td>
                </tr>
                <tr>
                   <td>Occasion</td>
                    <td> <%=shoeproduct.getOccasion()%></td>
                </tr>
            </tbody>
        </table>
        <table class="table table-bordered">
            <tbody>
                <tr>
                    <th class="info" colspan="2">Shoe Details</th>
                </tr>
                <tr>
                    <td>Closure</td>
                    <td> <%=shoeproduct.getClosure() %></td>
                </tr>
                <tr>
                    <td>Tip Shape</td>
                    <td> <%=shoeproduct.getTipShape()%></td>
                </tr>
                <tr>
                    <td>Weight</td>
                    <td> <%=shoeproduct.getWeight()%></td>
                </tr>
                <tr>
                    <td>Style</td>
                    <td><%=shoeproduct.getStyle1() %></td>
                </tr>
                <tr>
                    <td>Technology Used</td>
                    <td> <%=shoeproduct.getTechnologyused()%></td>
                </tr>
                <tr>
                    <td>Color</td>
                    <td> <%=shoeproduct.getColor()%></td>
                </tr>
                <tr>
                    <td>Design</td>
                    <td> <%=shoeproduct.getDesign()%></td>
                </tr>
            </tbody>
        </table>
        <table class="table table-bordered">
            <tbody>
                <tr>
                    <th class="info" colspan="2">Additional Details</th>
                </tr>
                <tr>
                    <td>Other Details</td>
                    <td> <%=shoeproduct.getOtherdetails()%></td>
                </tr>
            </tbody>
        </table>
        </div>
	</div>
	
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>  
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script> 
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-migrate/1.2.1/jquery-migrate.min.js"></script>
    <!--  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.5/slick.min.js"></script> -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.5/slick.min.js"></script>
    <script type="text/javascript" src="../js/product1.js"></script>
</body>
</html>
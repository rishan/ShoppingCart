<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Cool-Cart</title>
    <link rel="icon" href="../images/logo.jpg">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
    <link rel="stylesheet" type="text/css" href="../css/Cart.css">
    
    
</head>
<body>
	<nav class="navbar navbar-default navbar-inverse" style="opacity:0.8;position:fixed;width:100%;">
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
	<div class="container shopping-cart">
		<h4 id="cart-header" class="text-center" style="margin-top:10%;margin-bottom:5%;font-size:4vw;color:#fff"><b>Shopping Cart</b></h4>
		<table id="table-cart" class="padding-table" style="margin-right:-13px">
			<tr class="row" id="shopping-table-header">
				<th class="col-sm-3 text-center" style="white-space:nowrap">Product Image</th>
				<th class="col-sm-3 text-center">Items</th>
				<th class="col-sm-1 text-center">Qty</th>
				<th class="col-sm-2 text-center" style="white-space:nowrap">Unit Price</th>
				<th class="col-sm-1 text-center">Discount</th>
				<th class="col-sm-2 " colspan="2">Total Price</th>
			</tr>
		<tbody id = "shopping-cart-data">
		</tbody>
			<tr id="shopping-table-footer" >
				<td colspan="9"><button type="button" class="btn btn-primary pull-right update-shopping-cart visible-lg" style="width:20%;overflow:hidden">UPDATE SHOPPING CART</button><button type="button" class="btn btn-primary pull-right update-shopping-cart visible-md" style="width:20%;overflow:hidden">UPDATE CART</button><button type="button" class="btn btn-primary pull-right update-shopping-cart visible-xs visible-sm" style="width:20%;overflow:hidden">UPDATE</button></td>
			</tr>
		</table>
	<div class="row cart-coupon">
 	    <div class="col-sm-5 col-xs-12 cart-buttons cart-end transback">
    	    <h5 style = "margin-top: 5px;">DISCOUNT COUPONS</h5>	
        	<p>Enter your coupon code if you have one.</p>
         	<input type="email" class="form-control" id="example-couponcode"  placeholder=" ">
         	<button type="submit" class="btn btn-danger coupon-button" style="padding-left:0px;">APPLY COUPON</button>
        </div>
       	<div class="col-sm-offset-1 col-sm-6 col-xs-12 cart-buttons cart-end transback" style="overflow:hidden;padding:2px">
       		<p class= "text-right"> Subtotal &nbsp&nbsp &#x20B9 <span id="sub-total"></span></p>
       		<p class= "text-right"> Grand Total &nbsp&nbsp &#x20B9 <span id="grand-total"></span></p>
       		<div class="checkbox text-left" style="padding-left:">
   				<label><input type="checkbox"> Accept Terms & Conditions</label>
   			</div>	
        	<span style = "padding:8px;white-space:nowrap">
        	<button  id="terms-accept" type="button" class="btn btn-primary shop-button" title="PROCEED TO CHECKOUT" style="width:47%"><span class="visible-lg">PROCEED TO CHECKOUT</span><span class="hidden-lg">CHECKOUT</button>
        
        	<a href="shop.html"><button type="button" class="btn btn-primary shop-button" title="CONTINUE SHOPPING" style="width:47%;"><span class="visible-lg">CONTINUE SHOPPING</span><span class="hidden-lg">CONTINUE</span></button></a>	
        	</span>
   		</div>
    </div>
	</div>


	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>  
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script> 
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-migrate/1.2.1/jquery-migrate.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.5/slick.min.js"></script>
    <script type="text/javascript" src="../js/Cart.js"></script>
</body>
</html>
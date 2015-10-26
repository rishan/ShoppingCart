$(document).ready(function() {
	var isAlreadyInCart;
		$.ajax({
			url:"/shoeProduct",
			async:false,
			success:function(data){
				//console.log(data);
				ShoeFunction(data);
				isAlreadyInCart=IsAlreadyInCart(data);
				console.log(isAlreadyInCart.trim());
				
				if(isAlreadyInCart.trim()=="yes"){
					$("#add2cart").show();
					  $("#added2cart").hide();
				}
				else{
					$("#add2cart").hide();
					  $("#added2cart").show();
				}
			}
		});
		
		$.ajax({
			url:"/getUserName",
			success:function(data){
				console.log("username"+data);
				UserName(data);
			}
		});
		
        $('.slickOuterCarousel').slick({
            infinite: false,
            arrows:false,
            dots:true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1

                    }
                }, {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1

                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });

    $('.slickOuterCarousel .carousel').carousel({
          wrap: false
        }).on('slid.bs.carousel', function () {
            var $this=$(this);
            var curSlide = $this.find($('.active'));
            var left=$this.find($('.glyphicon-chevron-left'));
            var right=$this.find($('.glyphicon-chevron-right'));
          if(curSlide.is( ':first-child' )) {

             left.removeClass('special');
          }
          else
            {
                left.addClass('special');
            }
          if (curSlide.is( ':last-child' )) {
             right.addClass('special');
          }
          else
            {
                right.removeClass('special');
            }
        });


    /*$("#added2cart").hide();*/
    $("#add2cart").click(add2cartfunction);
    $("#added2cart").click(added2cartfunction);
    $("#check").click(function(){
              $("#pin-check").hide();
              $("#pin-ok").show();

          })
});
var userName;
function UserName(username){
	userName=username;
	console.log("username got from controller= "+userName);
}

function ShoeFunction(abc){
	
	$('#productID').html(abc.productID);
	$('#product-image').html('<img alt="" title="" src="'+abc.productimage+'"class="car-images">');
	$('#product-image2').html('<img alt="" title="" src="'+abc.productimage2+'"class="car-images">');
	$('#product-image3').html('<img alt="" title="" src="'+abc.productimage3+'"class="car-images">');
	$('#product-image4').html('<img alt="" title="" src="'+abc.productimage4+'"class="car-images">');
	$('#product-image5').html('<img alt="" title="" src="'+abc.productimage5+'"class="car-images">');
	$('#product-image6').html('<img alt="" title="" src="'+abc.productimage6+'"class="car-images">');
	$('#product-indicators').html('<li class="active" data-slide-to="0"\
			data-target="#article-photo-carousel"><img alt=""\
				src="'+abc.productimage+'"></li>\
			<li class="" data-slide-to="1"\
				data-target="#article-photo-carousel"><img alt=""\
				src="'+abc.productimage2+'"></li>\
			<li class="" data-slide-to="2"\
				data-target="#article-photo-carousel"><img alt=""\
				src="'+abc.productimage3+'"></li>\
			<li class="" data-slide-to="3"\
				data-target="#article-photo-carousel"><img alt=""\
				src="'+abc.productimage4+'"></li>\
			<li class="" data-slide-to="4"\
				data-target="#article-photo-carousel"><img alt=""\
				src="'+abc.productimage5+'"></li>\
			<li class="" data-slide-to="5"\
				data-target="#article-photo-carousel"><img alt=""\
				src="'+abc.productimage6+'"></li>')
	$('#product-desc').html(abc.description);
	$('#product-review').html(abc.noreviews);
	$('#product-aval').html(abc.availability);
	$('#product-unitprice').html("₹ "+abc.unitPrice);
	$('#product-discount').html("₹ "+abc.discount);
	$('#product-price').html("₹ "+abc.price);
	$('#product-desc2').html("Specifications for "+abc.description);
	$('#product-idealfor').html(abc.idealfor);
	$('#product-occasion').html(abc.occasion);
	$('#product-closure').html(abc.closure);
	$('#product-tipshape').html(abc.tipShape);
	$('#product-weight').html(abc.weight);
	$('#product-style1').html(abc.style1);
	$('#product-techno').html(abc.technologyused);
	$('#product-color').html(abc.color);
	$('#product-design').html(abc.design);
	$('#product-other').html(abc.otherdetails);
}


function add2cartfunction(){
		console.log(document.getElementById("productID").textContent);
		var productID=document.getElementById("productID").textContent;
		
	$.ajax({
		  url:"/addtocart",
		  type:"post",
		  data:{"clickedProductID":productID,"username":userName},
		  success: function(){  }
	
 });
	$("#add2cart").hide();
	  $("#added2cart").show();
	  $("#added2cart").unbind("click",added2cartfunction);
	  $("#added2cart").bind("click",added2cartfunction);
}
function added2cartfunction(){
	var productID=document.getElementById("productID").textContent;
	
	$.ajax({
		  url:"/deletefromcart",
		  type:"post",
		  data:{"clickedProductID":productID},
		  success: function(){  }
		  
 });
	 $("#add2cart").show();
	  $("#added2cart").hide();
	  $("#add2cart").unbind("click",add2cartfunction);
	  $("#add2cart").bind("click",add2cartfunction);

}

function IsAlreadyInCart(data){
	var productID=data.productID;
	var isincart;
	$.ajax({
		url:"/isincart",
		type:"post",
		async:false,
		data:{"clickedProductID":productID},
		dataType:"text",
		success:function(cartvar){
			console.log(cartvar);
			isincart=cartvar;
		}
	})
	console.log("before return"+isincart)
	return isincart;
}
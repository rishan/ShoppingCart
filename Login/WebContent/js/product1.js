$(document).ready(function() {
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

   // var product1= "";
    //var retrievedObject = localStorage.getItem('cata_category');
//    var retrievedObject = SessionStorage.getItem('clickedProductsID');

 // $('#product_data').html(product1);
  $("#added2cart").hide();
  $("#add2cart").click(add2cartfunction);
  $("#added2cart").click(added2cartfunction);
  $("#check").click(function(){
            $("#pin-check").hide();
            $("#pin-ok").show();

        });
});
function add2cartfunction(){
	console.log(document.getElementById("productID").textContent);
	var productID=document.getElementById("productID").textContent;
	$.ajax({
		  url:"/Login/Cart",
		  type:"post",
		  data:{"clickedProductID":productID,"cart":"add"},
		  success: function(data){
			  $("#add2cart").hide();
			  $("#added2cart").show();
			  $("#added2cart").unbind("click",added2cartfunction);
			  $("#added2cart").bind("click",added2cartfunction);

		  }
 });
}
function added2cartfunction(){
	var productID=document.getElementById("productID").textContent;
	$.ajax({
		  url:"/Login/Cart",
		  type:"post",
		  data:{"clickedProductID":productID,"cart":"delete"},
		  success: function(data){
			  $("#add2cart").show();
			  $("#added2cart").hide();
			  $("#add2cart").unbind("click",add2cartfunction);
			  $("#add2cart").bind("click",add2cartfunction);

		  }
 });
}

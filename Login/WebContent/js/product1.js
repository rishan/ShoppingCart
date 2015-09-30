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

    var product1= "";
    var retrievedObject = localStorage.getItem('cata_category');
    var abc=JSON.parse(retrievedObject);

    product1+='<div class="product-description-container container-fluid">\
        <div class="product-description_carousel col-sm-8">\
            <div class="slickOuterCarousel lazy">\
                <div>\
                    <div class="carousel slide article-slide" id="article-photo-carousel" data-ride="carousel" data-interval="false">\
                        <!-- Wrapper for slides -->\
                        <div class="carousel-inner cont-slider">\
                            <div class="item active">\
                                <img alt="" title="" src="'+ abc.Productimage +'" class="car-images">\
                            </div>\
                            <div class="item">\
                                <img alt="" title="" src="'+abc.Productimage2 +'" class="car-images">\
                            </div>\
                            <div class="item">\
                                <img alt="" title="" src="'+ abc.Productimage3 +'" class="car-images">\
                            </div>\
                            <div class="item">\
                                <img alt="" title="" src="'+ abc.Productimage4 +'" class="car-images">\
                            </div>\
                            <div class="item">\
                                <img alt="" title="" src="'+ abc.Productimage5 +'" class="car-images">\
                            </div>\
                            <div class="item">\
                                <img alt="" title="" src="'+ abc.Productimage6 +'" class="car-images">\
                            </div>\
                        </div>\
                        <!-- Indicators -->\
                        <ol class="carousel-indicators hidden-xs">\
                            <li class="active" data-slide-to="0" data-target="#article-photo-carousel">\
                                <img alt="" src="'+ abc.Productimage +'">\
                            </li>\
                            <li class="" data-slide-to="1" data-target="#article-photo-carousel">\
                                <img alt="" src="'+ abc.Productimage2 +'">\
                            </li>\
                            <li class="" data-slide-to="2" data-target="#article-photo-carousel">\
                                <img alt="" src="'+ abc.Productimage3 +'">\
                            </li>\
                            <li class="" data-slide-to="3" data-target="#article-photo-carousel">\
                                <img alt="" src="'+ abc.Productimage4 +'">\
                            </li>\
                            <li class="" data-slide-to="4" data-target="#article-photo-carousel">\
                                <img alt="" src="'+ abc.Productimage5 +'">\
                            </li>\
                            <li class="" data-slide-to="5" data-target="#article-photo-carousel">\
                                <img alt="" src="'+ abc.Productimage6 +'">\
                            </li>\
                        </ol>\
                        <a class="carousel-control left " href="#article-photo-carousel" data-slide="prev">\
                            <span class="glyphicon glyphicon-chevron-left"></span>\
                        </a>\
                        <a class="carousel-control right" href="#article-photo-carousel" data-slide="next">\
                            <span class="glyphicon glyphicon-chevron-right"></span>\
                        </a>\
                    </div>\
                </div>\
            </div>\
        </div>\
        <div class="product_details_sidebar col-sm-4">\
            <h4>'+ abc.Description +'</h4>\
            <div class="options col-sm-10 no-padding">\
                <div class="review">\
                    <div class="product_rating col-xs-12">\
                        <img src="../images/blue-star.png">\
                        <img src="../images/blue-star.png">\
                        <img src="../images/blue-star.png">\
                        <img src="../images/blue-star.png">\
                        <img src="../images/blue-star.png">\
                        <span class="no_of_reviews">'+ abc.noreviews +'</span>\
                        <span style="border-left: 1px solid blue;padding: 0px 2px;"></span>\
                        <a href="#"> Write a review </a>\
                    </div>\
                </div>\
                <div class="stock_delivery">\
                    <div class="product_availability col-xs-12 no-padding">\
                        <span class="availability">Availability: <span class="instock">'+ abc["Availability"] +'</span></span>\
                        <span class="delevierydays">Delivered in 3-5 days</span>\
                    </div>\
                </div>\
                <table class="table row hidden-xs" style="margin-top:15px">\
                    <tr>\
                        <th>Unit Price</th>\
                        <th>Discount</th>\
                        <th>Total Price</th>\
                    </tr>\
                    <tr>\
                        <td>₹ '+ abc["UnitPrice"] +'</td>\
                        <td>₹ '+ abc.Discount +'</td>\
                        <td>₹ '+ abc.Price +'</td>\
                    </tr>\
                </table>\
                <div class="pincode">\
                    <div class="pin col-xs-10 no-padding">\
                        <div class="input-group">\
                            <div id="pin-check" class="input-group">\
                                <input type="text" class="form-control"  pattern="[0-9]{6}" maxlength="6"  placeholder="Pincode">\
                                <span class="input-group-btn"><button id="check" type="button" class="btn btn-default">CHECK</button></span>\
                            </div>\
                            <span class="text-center" id="pin-ok" style="display:none"><span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>Available at your location</p></span>\
                        </div>\
                    </div>\
                </div>\
                <div class="buy">\
                    <div class="col-sm-12 col-xs-12 no-padding">\
                        <a  href="Cart.html" id="add2cart" class="label label-primary col-sm-5 col-xs-5 no-border-radius ">ADD TO CART</a>\
                        <a id="add2wishlist" class="label label-primary col-sm-5 col-xs-5 col-sm-offset-2 col-xs-offset-2 no-border-radius">ADD TO WISHLIST</a>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>\
    <div class="container">\
        <h3> Specifications of '+ abc.Description +' </h3>\
        <table class="table table-bordered">\
            <tbody>\
                <tr>\
                    <th class="info" colspan="2">General</th>\
                </tr>\
                <tr>\
                    <td>Ideal For</td>\
                    <td> '+ abc.Idealfor +' </td>\
                </tr>\
                <tr>\
                    <td>Occasion</td>\
                    <td> '+ abc.Occasion +' </td>\
                </tr>\
            </tbody>\
        </table>\
        <table class="table table-bordered">\
            <tbody>\
                <tr>\
                    <th class="info" colspan="2">Shoe Details</th>\
                </tr>\
                <tr>\
                    <td>Closure</td>\
                    <td> '+ abc.Closure +'</td>\
                </tr>\
                <tr>\
                    <td>Tip Shape</td>\
                    <td> '+ abc.TipShape +' </td>\
                </tr>\
                <tr>\
                    <td>Weight</td>\
                    <td> '+ abc.Weight +' </td>\
                </tr>\
                <tr>\
                    <td>Style</td>\
                    <td>'+ abc.Style1 +'</td>\
                </tr>\
                <tr>\
                    <td>Technology Used</td>\
                    <td> '+ abc.Technologyused +' </td>\
                </tr>\
                <tr>\
                    <td>Color</td>\
                    <td> '+ abc.Color +' </td>\
                </tr>\
                <tr>\
                    <td>Design</td>\
                    <td> '+ abc.Design +' </td>\
                </tr>\
            </tbody>\
        </table>\
        <table class="table table-bordered">\
            <tbody>\
                <tr>\
                    <th class="info" colspan="2">Additional Details</th>\
                </tr>\
                <tr>\
                    <td>Other Details</td>\
                    <td> '+ abc.Otherdetails +' </td>\
                </tr>\
            </tbody>\
        </table>\
        </div>';
    
  //  Product1(productdata);
  $('#product_data').html(product1);

  $("#add2cart").click(function(){
            var cart_list=JSON.parse(localStorage.getItem('cart_list1')) || [];
            cart_list.push(abc);
            localStorage.setItem('cart_list1',JSON.stringify(cart_list));
    });
  $("#check").click(function(){
            $("#pin-check").hide();
            $("#pin-ok").show();

        });
});

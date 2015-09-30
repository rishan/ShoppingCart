$(document).ready(function(){
	$(".home").click(function(){
		$('.localheading').html("HOME");
		$('.tablinks').removeClass("coloredtabs");
		$(".home>.tablinks").addClass("coloredtabs");
	});
	$(".shoes").click(function(){
		$('.localheading').html("SHOES");
		$('.tablinks').removeClass("coloredtabs");
		$(".shoes>.tablinks").addClass("coloredtabs");
	});
	$(".electronics").click(function(){
		$('.localheading').html("ELECTRONICS");
		$('.tablinks').removeClass("coloredtabs");
		$(".electronics>.tablinks").addClass("coloredtabs");
	});
	$(".books").click(function(){
		$('.localheading').html("BOOKS");
		$('.tablinks').removeClass("coloredtabs");
		$(".books>.tablinks").addClass("coloredtabs");
	});
	$(".clothing").click(function(){
		$('.localheading').html("CLOTHING");
		$('.tablinks').removeClass("coloredtabs");
		$(".clothing>.tablinks").addClass("coloredtabs");
	});
	$(".miscellaneous").click(function(){
		$('.localheading').html("MISCELLANEOUS");
		$('.tablinks').removeClass("coloredtabs");
		$(".miscellaneous>.tablinks").addClass("coloredtabs");
	});
	$('.innertabs a').click(function (e) {
  		$('.innertabs>li').removeClass("active");
  		e.preventDefault();
  		$(this).tab('show')
    });


	function activaTab(tab){
	    $('.nav-tabs a[href="#' + tab + '"]').tab('show');
	};

   $("#redirect1").click(function(){
   		activaTab('data-electronics');
    	$('.electronics').click();
    });
   $("#redirect2").click(function(){
   		activaTab('data-shoes');
    	$('.shoes').click();
    });
   $("#redirect3").click(function(){
   		activaTab('data-books');
    	$('.books').click();
    });
   $("#redirect4").click(function(){
   		activaTab('data-clothing');
    	$('.clothing').click();
    });
   
   $("#subs").click(function(){
	   var email = $('#newsletter').val();
	    if(email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/))
	    {
	        window.location.href="subscribe.html";
	        $("#subserror").hide();
	    }
	    else{
	    	$("#subserror").show();
	    	
	    }
	});
/*shoes*/
	var Itemdata={"Pair-00":{"Productimage":"../images/product1-1.jpeg",
							"Description":"Puma Running Shoes</a>",
							"Price":2222,
							"pricerange":"1000-2999",
							"gender":"male",
							"stock":"Available",
							"type":"Shoes",
							"Productimage2":"../images/product1-2.jpeg",
                            "Productimage3":"../images/product1-3.jpeg",
                            "Productimage4":"../images/product1-4.jpeg",
                            "Productimage5":"../images/product1-5.jpeg",
                            "Productimage6":"../images/product1-6.jpeg",
                            "Availability":"In Stock",
                            "noreviews":25,
                            "UnitPrice":3999,
                            "Discount":1777,
                            "Idealfor":"Men",
                            "Occasion":"Sports",
                            "Closure":"Laced",
                            "TipShape":"Round",
                            "Weight":"289 gm (per single Shoe) - Weight of the product may vary depending on size.",
                            "Style1":"Panel and Stitch Detail, Loop at Back, Mesh Panel Detail",
                            "Technologyused":"Arch Technology",
                            "Color":"03, White, Puma Silver, High Risk Red",
                            "Design":"Logo Detail",
                            "Otherdetails":"Cushioned Ankle and Tongue, Textured Sole, Padded Footbed"
							},
					"Pair-01":{"Productimage":"../images/shoe1-1.jpg",
							"Description":"Blue Gladiators",
							"Price":900,
							"pricerange":"500-999",
							"gender":"female",
							"stock":"Available",
							"type":"Shoes",
							"Productimage2":"../images/product3-2.jpeg",
                            "Productimage3":"../images/product3-3.jpeg",
                            "Productimage4":"../images/product3-4.jpeg",
                            "Productimage5":"../images/product3-5.jpeg",
                            "Productimage6":"../images/product3-6.jpeg",
                            "Availability":"In Stock",
                            "noreviews":12,
                            "UnitPrice":999,
                            "Discount":99,
                            "Idealfor":"Women",
                            "Occasion":"Casual",
                            "Closure":"Strapped",
                            "TipShape":"Round",
                            "Weight":"159 gm (per single Shoe) - Weight of the product may vary depending on size.",
                            "Style1":"Panel and Stitch Detail, Loop at Back, Mesh Panel Detail",
                            "Technologyused":"Arch Technology",
                            "Color":"03, Blue, Reebok Blue, High Risk Black",
                            "Design":"Logo Detail",
                            "Otherdetails":"Cushioned Ankle and Tongue, Textured Sole, Padded Footbed"
							},
					"Pair-02":{"Productimage":"../images/product2-1.jpeg",
							"Description":"Reebok Realflex Speed 2.0 Running Shoes",
							"Price":3888,
							"pricerange":"3000",
							"gender":"male",
							"stock":"Available",
							"type":"Shoes",
							"Productimage2":"../images/product2-2.jpeg",
                            "Productimage3":"../images/product2-3.jpeg",
                            "Productimage4":"../images/product2-4.jpeg",
                            "Productimage5":"../images/product2-5.jpeg",
                            "Productimage6":"../images/product2-6.jpeg",
                            "Availability":"In Stock",
                            "noreviews":36,
                            "UnitPrice":6999,
                            "Discount":3111,
                            "Idealfor":"Men",
                            "Occasion":"Sports",
                            "Closure":"Laced",
                            "TipShape":"Round",
                            "Weight":"259 gm (per single Shoe) - Weight of the product may vary depending on size.",
                            "Style1":"Panel and Stitch Detail, Loop at Back, Mesh Panel Detail",
                            "Technologyused":"Arch Technology",
                            "Color":"03, Blue, Reebok Blue, High Risk Black",
                            "Design":"Logo Detail",
                            "Otherdetails":"Cushioned Ankle and Tongue, Textured Sole, Padded Footbed"
							},
					"Pair-03":{"Productimage":"../images/shoe2-1.jpg",
							"Description":"Trendy black heeled pumps",
							"Price":2000,
							"pricerange":"1000-2999",
							"gender":"female",
							"stock":"Out of Stock",
							"type":"Shoes",
							"Productimage2":"../images/product3-2.jpeg",
                            "Productimage3":"../images/product3-3.jpeg",
                            "Productimage4":"../images/product3-4.jpeg",
                            "Productimage5":"../images/product3-5.jpeg",
                            "Productimage6":"../images/product3-6.jpeg",
                            "Availability":"In Stock",
                            "noreviews":31,
                            "UnitPrice":3999,
                            "Discount":1999,
                            "Idealfor":"Women",
                            "Occasion":"Casual",
                            "Closure":"Strapped",
                            "TipShape":"Round",
                            "Weight":"159 gm (per single Shoe) - Weight of the product may vary depending on size.",
                            "Style1":"Panel and Stitch Detail, Loop at Back, Mesh Panel Detail",
                            "Technologyused":"Arch Technology",
                            "Color":"03, Blue, Reebok Blue, High Risk Black",
                            "Design":"Logo Detail",
                            "Otherdetails":"Cushioned Ankle and Tongue, Textured Sole, Padded Footbed"
							},
					"Pair-04":{"Productimage":"../images/shoe3-1.jpg",
							"Description":"Strap-on low heel wedges",
							"Price":450,
							"pricerange":"0-499",
							"gender":"female",
							"stock":"Out of Stock",
							"type":"Shoes",
							"Productimage2":"../images/product3-2.jpeg",
                            "Productimage3":"../images/product3-3.jpeg",
                            "Productimage4":"../images/product3-4.jpeg",
                            "Productimage5":"../images/product3-5.jpeg",
                            "Productimage6":"../images/product3-6.jpeg",
                            "Availability":"In Stock",
                            "noreviews":2,
                            "UnitPrice":900,
                            "Discount":450,
                            "Idealfor":"Women",
                            "Occasion":"Casual",
                            "Closure":"Strapped",
                            "TipShape":"Round",
                            "Weight":"159 gm (per single Shoe) - Weight of the product may vary depending on size.",
                            "Style1":"Panel and Stitch Detail, Loop at Back, Mesh Panel Detail",
                            "Technologyused":"Arch Technology",
                            "Color":"03, Blue, Reebok Blue, High Risk Black",
                            "Design":"Logo Detail",
                            "Otherdetails":"Cushioned Ankle and Tongue, Textured Sole, Padded Footbed"
							},
					"Pair-05":{"Productimage":"../images/shoe4-1.jpg",
							"Description":"Special Winter Heels",
							"Price":980,
							"pricerange":"500-999",
							"gender":"female",
							"stock":"Available",
							"type":"Shoes",
							"Productimage2":"../images/product3-2.jpeg",
                            "Productimage3":"../images/product3-3.jpeg",
                            "Productimage4":"../images/product3-4.jpeg",
                            "Productimage5":"../images/product3-5.jpeg",
                            "Productimage6":"../images/product3-6.jpeg",
                            "Availability":"In Stock",
                            "noreviews":56,
                            "UnitPrice":999,
                            "Discount":19,
                            "Idealfor":"Women",
                            "Occasion":"Casual",
                            "Closure":"Strapped",
                            "TipShape":"Round",
                            "Weight":"159 gm (per single Shoe) - Weight of the product may vary depending on size.",
                            "Style1":"Panel and Stitch Detail, Loop at Back, Mesh Panel Detail",
                            "Technologyused":"Arch Technology",
                            "Color":"03, Blue, Reebok Blue, High Risk Black",
                            "Design":"Logo Detail",
                            "Otherdetails":"Cushioned Ankle and Tongue, Textured Sole, Padded Footbed"
							},
					"Pair-06":{"Productimage":"../images/shoe5-1.jpg",
							"Description":"Glamour heels",
							"Price":2000,
							"pricerange":"1000-2999",
							"gender":"female",
							"stock":"Available",
							"type":"Shoes",
							"Productimage2":"../images/product3-2.jpeg",
                            "Productimage3":"../images/product3-3.jpeg",
                            "Productimage4":"../images/product3-4.jpeg",
                            "Productimage5":"../images/product3-5.jpeg",
                            "Productimage6":"../images/product3-6.jpeg",
                            "Availability":"In Stock",
                            "noreviews":45,
                            "UnitPrice":4999,
                            "Discount":2999,
                            "Idealfor":"Women",
                            "Occasion":"Casual",
                            "Closure":"Strapped",
                            "TipShape":"Round",
                            "Weight":"159 gm (per single Shoe) - Weight of the product may vary depending on size.",
                            "Style1":"Panel and Stitch Detail, Loop at Back, Mesh Panel Detail",
                            "Technologyused":"Arch Technology",
                            "Color":"03, Blue, Reebok Blue, High Risk Black",
                            "Design":"Logo Detail",
                            "Otherdetails":"Cushioned Ankle and Tongue, Textured Sole, Padded Footbed"
							}}
	var Item_data="";
	function pagedata(arr) {
		for(var key in arr){
			var i;
			Item_data+='<div id="'+key+'" class="col-sm-3 Item-brief-descri product products mycatalogue1" data-tag="'+arr[key].gender+';'+arr[key].pricerange+';'+arr[key].stock+';all">\
					   <a style="cursor:pointer"><img src="'+ arr[key].Productimage +'" alt="shoe-pair-1" style="width:50%; height:100px"></a>\
					   <a style="cursor:pointer"><p class="Item-name">'+ arr[key].Description +'</p></a>\
					   <p class="Item-cost">Price: ₹'+ arr[key].Price +'</p>\
					   <p>Availability:'+ arr[key].stock +' </p>\
					   </div>'
			}
		}
	pagedata(Itemdata);
	$('#product-data1').html(Item_data);

	// $('#data-shoes input:radio').change(function(){
	// 	if($(this).is(":checked")){		
	// 	Item_data="";
	// 	$('#product-data1').html(Item_data);
 //        console.log("" + this.name + " " + $(this).val());
 //        filterdata(this.name,$(this).val());
 //    }
 //    });

 //    function filterdata(def,abc){
	// 	for(var key in Itemdata){
	// 		if(Itemdata[key][def]==abc){

	// 		Item_data+='<div id="'+key+'" class="col-sm-3 Item-brief-descri products mycatalogue1" data-tag="'+Itemdata[key].pricerange+';'+Itemdata[key].stock+';all">\
	// 			   <a style="cursor:pointer"><img src="'+ Itemdata[key].Productimage +'" alt="shoe-pair-1" style="width:50%; height:100px"></a>\
	// 			   <a style="cursor:pointer"><p class="Item-name">'+ Itemdata[key].Description +'</p></a>\
	// 			   <p class="Item-cost">Price: ₹'+ Itemdata[key].Price +'</p>\
	// 			   <p>Availability:'+ Itemdata[key].stock +' </p>\
	// 			   </div>'
	// 		$('#product-data1').html(Item_data);
	// 		}
	// 		}
	// }

	$('.filterbox').on('change', function(){
				var category_list0 = [];
	    		$('#gender input:checked').each(function(){
	      		var category = $(this).val();
	      		category_list0.push(category); 
	    		});
	    		var category_list = [];
	    		$('#prices input:checked').each(function(){
	      		var category = $(this).val();
	      		category_list.push(category); 
	    		});
	    		var category_list2 = [];
	    		$('#stock input:checked').each(function(){
	      		var category2 = $(this).val();
	      		category_list2.push(category2); 
	    		});
	    		if(category_list0.length==0){
	    			category_list0=["all"];
	    		}
	    		if(category_list.length==0){
	    			category_list=["all"];
	    		}
	    		if(category_list2.length==0){
	    			category_list2=["all"];
	    		}
	    		$('.products').each(function(){
        			var cats=$(this).data('tag').split(';');
        			var checkMatches0=$.grep(category_list0, function(val){                
               		 return $.inArray(val, cats) >-1;
           			 });
            		var checkMatches=$.grep(category_list, function(val){                
               		 return $.inArray(val, cats) >-1;
           			 }); 
            		var checkMatches2=$.grep(category_list2, function(val){                
               		 return $.inArray(val, cats) >-1;
           			 }); 
            		if(checkMatches0.length!==0 && checkMatches.length!==0 && checkMatches2.length!==0){
            			$(this).show();
            		}
            		else{
            			$(this).hide();
            		}
            	});
	    	});
	$(".mycatalogue1").wrap('<a href="product1.html"></a>'); 	
	$(".mycatalogue1").click(function(){
	for(var abc in Itemdata){
		if($(this).attr("id")==abc){
			 localStorage.setItem('cata_category', JSON.stringify(Itemdata[abc]));
		}
	}
});

/*electronics*/
var elecdata={		"10":{"Productimage":"../images/elec1.jpg",
							"Description":"iPhone 6</a>",
							"UnitPrice":50000,
							"Discount":0,
							"Price":50000,
							"pricerange":"50000-99999",
							"typee":"phone",
							"stock":"Available",
							"Brand":"Apple",
							"HandsetColor":"White",
							"Form1":"Bar",
							"SIMSize":"Micro SIM",
							"CallFeatures":"Loudspeaker",
							"ModelName":"Apple iPhone6",
							"TouchScreen":"yes",
							"SIMType":"Dual SIM GSM+LTE",
							"FrontCamera":"13MP",
							"RearCamera":"5MP",
							"Zoom":"4x",
							"Otherdetails":"1 year manufacturer warranty for Phone and for in the box accessories "
							},
					"11":{"Productimage":"../images/elec2.jpg",
							"Description":"iPad",
							"Price":12000,
							"pricerange":"10000-19999",
							"typee":"tablet",
							"stock":"Available",
							"UnitPrice":20000,
							"Discount":8000,
							"Brand":"Apple",
							"HandsetColor":"White",
							"Form1":"Bar",
							"SIMSize":"Micro SIM",
							"CallFeatures":"Loudspeaker",
							"ModelName":"Apple iPad",
							"TouchScreen":"yes",
							"SIMType":"Dual SIM GSM+LTE",
							"FrontCamera":"13MP",
							"RearCamera":"5MP",
							"Zoom":"4x",
							"Otherdetails":"1 year manufacturer warranty for Phone and for in the box accessories"
							},
					"12":{"Productimage":"../images/elec3.jpg",
							"Description":"Windows Laptop",
							"Price":15000,
							"pricerange":"10000-19999",
							"typee":"laptop",
							"stock":"Available",
							"UnitPrice":20000,
							"Discount":5000,
							"Brand":"Microsoft",
							"HandsetColor":"White",
							"Form1":"Bar",
							"SIMSize":"Micro SIM",
							"CallFeatures":"Loudspeaker",
							"ModelName":"Apple iPhone6",
							"TouchScreen":"yes",
							"SIMType":"Dual SIM GSM+LTE",
							"FrontCamera":"13MP",
							"RearCamera":"5MP",
							"Zoom":"4x",
							"Otherdetails":"1 year manufacturer warranty for Phone and for in the box accessories "
							},
					"13":{"Productimage":"../images/elec4.jpg",
							"Description":"Dell Alienware",
							"Price":90000,
							"pricerange":"50000-99999",
							"typee":"laptop",
							"stock":"Out of Stock",
							"UnitPrice":100000,
							"Discount":10000,
							"Brand":"Dell",
							"HandsetColor":"White",
							"Form1":"Bar",
							"SIMSize":"Micro SIM",
							"CallFeatures":"Loudspeaker",
							"ModelName":"Apple iPhone6",
							"TouchScreen":"yes",
							"SIMType":"Dual SIM GSM+LTE",
							"FrontCamera":"13MP",
							"RearCamera":"5MP",
							"Zoom":"4x",
							"Otherdetails":"1 year manufacturer warranty for Phone and for in the box accessories "
							},
					"14":{"Productimage":"../images/elec5.jpg",
							"Description":"HTC One M8",
							"Price":18000,
							"pricerange":"10000-19999",
							"typee":"phone",
							"stock":"Out of Stock",
							"UnitPrice":30000,
							"Discount":12000,
							"Brand":"HTC",
							"HandsetColor":"White",
							"Form1":"Bar",
							"SIMSize":"Micro SIM",
							"CallFeatures":"Loudspeaker",
							"ModelName":"Apple iPhone6",
							"TouchScreen":"yes",
							"SIMType":"Dual SIM GSM+LTE",
							"FrontCamera":"13MP",
							"RearCamera":"5MP",
							"Zoom":"4x",
							"Otherdetails":"1 year manufacturer warranty for Phone and for in the box accessories "
							},
					"15":{"Productimage":"../images/elec6.jpg",
							"Description":"Samsung Galaxy S6 Edge",
							"Price":60000,
							"pricerange":"50000-99999",
							"typee":"phone",
							"stock":"Out of Stock",
							"UnitPrice":65000,
							"Discount":5000,
							"Brand":"Samsung",
							"HandsetColor":"White",
							"Form1":"Bar",
							"SIMSize":"Micro SIM",
							"CallFeatures":"Loudspeaker",
							"ModelName":"Apple iPhone6",
							"TouchScreen":"yes",
							"SIMType":"Dual SIM GSM+LTE",
							"FrontCamera":"13MP",
							"RearCamera":"5MP",
							"Zoom":"4x",
							"Otherdetails":"1 year manufacturer warranty for Phone and for in the box accessories "
							},
					"16":{"Productimage":"../images/elec7.jpg",
							"Description":"Windows Tablet",
							"Price":20000,
							"pricerange":"10000-19999",
							"typee":"tablet",
							"stock":"Out of Stock",
							"UnitPrice":22000,
							"Discount":200-0,
							"Brand":"Microsoft",
							"HandsetColor":"White",
							"Form1":"Bar",
							"SIMSize":"Micro SIM",
							"CallFeatures":"Loudspeaker",
							"ModelName":"Apple iPhone6",
							"TouchScreen":"yes",
							"SIMType":"Dual SIM GSM+LTE",
							"FrontCamera":"13MP",
							"RearCamera":"5MP",
							"Zoom":"4x",
							"Otherdetails":"1 year manufacturer warranty for Phone and for in the box accessories "
							}}
	var elec_data="";

	function elecdata1(arr) {
		for(var key in arr){
			var i;
			elec_data+='<div id="'+key+'" class="col-sm-3 Item-brief-descri product products-elec mycatalogue" data-tagelec="'+arr[key].typee+';'+arr[key].pricerange+';all">\
					   <a style="cursor:pointer"><img src="'+ arr[key].Productimage +'" alt="" style="width:50%; height:100px"></a>\
					   <a style="cursor:pointer"><p class="Item-name">'+ arr[key].Description +'</p></a>\
					   <p class="Item-cost">Price: ₹'+ arr[key].Price +'</p>\
					   <p>Availability:'+ arr[key].stock +' </p>\
					   </div>'
			}
		}
	elecdata1(elecdata);
	$('#product-electronics').html(elec_data);

$('.filterbox-elec').on('change', function(){
	    		var category_list = [];
	    		$('#type_elec input:checked').each(function(){
	      		var category = $(this).val();
	      		category_list.push(category); 
	    		});
	    		var category_list2 = [];
	    		$('#prices_elec input:checked').each(function(){
	      		var category2 = $(this).val();
	      		category_list2.push(category2); 
	    		});
	    		if(category_list.length==0){
	    			category_list=["all"];
	    		}
	    		if(category_list2.length==0){
	    			category_list2=["all"];
	    		}
	    		$('.products-elec').each(function(){
        			var cats=$(this).data('tagelec').split(';');
            		var checkMatches=$.grep(category_list, function(val){                
               		 return $.inArray(val, cats) >-1;
           			 }); 
            		var checkMatches2=$.grep(category_list2, function(val){                
               		 return $.inArray(val, cats) >-1;
           			 }); 
            		if(checkMatches.length!==0 && checkMatches2.length!==0){
            			$(this).show();
            		}
            		else{
            			$(this).hide();
            		}
            	});
	    	});
 $(".mycatalogue").wrap('<a href="product2.html"></a>'); 	
$(".mycatalogue").click(function(){
	for(var abc in elecdata){
		if($(this).attr("id")==abc){
			 localStorage.setItem('cata_category', JSON.stringify(elecdata[abc]));
		}
	}
});

});
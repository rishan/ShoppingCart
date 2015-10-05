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
		$(this).on("click",ShoeFunction());
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
    	$('.shoes').on("click",ShoeFunction());
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
   var Itemdata;
   function ShoeFunction(){
	   $.ajax({
			  url:"/Login/Shop",
			  type:"get",
			  datatype:"Object",
			  data:{"type":"shoes"},
			  success: function(data){
				  Shoefunction1(data);
			  }
	   });
   }
   
   function Shoefunction1(result){
	  console.log("got result");
	  //console.log(result);
	  console.log(typeof result);
	  console.log(result[0])
	  console.log(result[1].gender)
	  var Item_data="";
		function pagedata(arr) {
			for(var key in arr){
				console.log(key);
				var i;
				Item_data+='<div id="'+arr[key].productID+'" class="col-sm-3 Item-brief-descri product products mycatalogue1" data-tag="'+arr[key].gender+';'+arr[key].pricerange+';'+arr[key].stock+';all">\
						   <a style="cursor:pointer"><img src="'+ arr[key].productimage +'" alt="shoe-pair-1" style="width:50%; height:100px"></a>\
						   <a style="cursor:pointer"><p class="Item-name">'+ arr[key].description +'</p></a>\
						   <p class="Item-cost">Price: ₹'+ arr[key].price +'</p>\
						   <p>Availability:'+ arr[key].stock +' </p>\
						   </div>'
				}
			}
		pagedata(result);
		$('#product-data1').html(Item_data);
	  //console.log(result.gender);
//	  for(var key in result){
//		  Itemdata[key]=result[key];
//	  }
	  //Itemdata=result;
   }
   console.log(Itemdata)

   
//	var Item_data="";
//	function pagedata(arr) {
//		for(var key in arr){
//			console.log(key);
//			var i;
//			Item_data+='<div id="'+key+'" class="col-sm-3 Item-brief-descri product products mycatalogue1" data-tag="'+arr[key].gender+';'+arr[key].pricerange+';'+arr[key].stock+';all">\
//					   <a style="cursor:pointer"><img src="'+ arr[key].productimage +'" alt="shoe-pair-1" style="width:50%; height:100px"></a>\
//					   <a style="cursor:pointer"><p class="Item-name">'+ arr[key].description +'</p></a>\
//					   <p class="Item-cost">Price: ₹'+ arr[key].price +'</p>\
//					   <p>Availability:'+ arr[key].stock +' </p>\
//					   </div>'
//			}
//		}
//	pagedata(Itemdata);
//	$('#product-data1').html(Item_data);

	
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

///*electronics*/
//	var elec_data="";
//
//	function elecdata1(arr) {
//		for(var key in arr){
//			var i;
//			elec_data+='<div id="'+key+'" class="col-sm-3 Item-brief-descri product products-elec mycatalogue" data-tagelec="'+arr[key].typee+';'+arr[key].pricerange+';all">\
//					   <a style="cursor:pointer"><img src="'+ arr[key].Productimage +'" alt="" style="width:50%; height:100px"></a>\
//					   <a style="cursor:pointer"><p class="Item-name">'+ arr[key].Description +'</p></a>\
//					   <p class="Item-cost">Price: ₹'+ arr[key].Price +'</p>\
//					   <p>Availability:'+ arr[key].stock +' </p>\
//					   </div>'
//			}
//		}
//	elecdata1(elecdata);
//	$('#product-electronics').html(elec_data);
//
//$('.filterbox-elec').on('change', function(){
//	    		var category_list = [];
//	    		$('#type_elec input:checked').each(function(){
//	      		var category = $(this).val();
//	      		category_list.push(category); 
//	    		});
//	    		var category_list2 = [];
//	    		$('#prices_elec input:checked').each(function(){
//	      		var category2 = $(this).val();
//	      		category_list2.push(category2); 
//	    		});
//	    		if(category_list.length==0){
//	    			category_list=["all"];
//	    		}
//	    		if(category_list2.length==0){
//	    			category_list2=["all"];
//	    		}
//	    		$('.products-elec').each(function(){
//        			var cats=$(this).data('tagelec').split(';');
//            		var checkMatches=$.grep(category_list, function(val){                
//               		 return $.inArray(val, cats) >-1;
//           			 }); 
//            		var checkMatches2=$.grep(category_list2, function(val){                
//               		 return $.inArray(val, cats) >-1;
//           			 }); 
//            		if(checkMatches.length!==0 && checkMatches2.length!==0){
//            			$(this).show();
//            		}
//            		else{
//            			$(this).hide();
//            		}
//            	});
//	    	});
// $(".mycatalogue").wrap('<a href="product2.html"></a>'); 	
//$(".mycatalogue").click(function(){
//	for(var abc in elecdata){
//		if($(this).attr("id")==abc){
//			 localStorage.setItem('cata_category', JSON.stringify(elecdata[abc]));
//		}
//	}
//});

});
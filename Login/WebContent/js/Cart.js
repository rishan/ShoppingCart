$(document).ready(function(){

    var abc=JSON.parse(localStorage.getItem('cart_list1'));

	var table_output = "";
	function myFunction(arr) {
		for(var key in arr){
			console.log(key);
				table_output +=	'<tr class="row text-center" id='+key+' >\
				<td class="col-sm-3"><a href="#"><img src="'+ abc[key]["Productimage"] +'" alt="product image" style="width:70%;height:auto;"></a></td>\
				<td class="col-sm-3"><a href="#">'+ abc[key]["Description"] +'</a></td>\
				<td class="col-sm-1"><input type="text" id="qty-width" style="width:50%;" value="1" max="100" min="1" class="text-center hidden-xs qtyclass class2" disabled><span class="visible-xs">1</span></td>\
				<td class="col-sm-2 cost-color  text-center"> ₹' + abc[key]["UnitPrice"] +'</td>\
				<td class="col-sm-1 cost-color  text-center"> ₹' + abc[key]["Discount"] +'</td>\
				<td class="col-sm-1 cost-color  text-center totalprice"> ₹' + abc[key]["Price"] +'</td>\
				<input type="hidden" class="rowindex">\
				<td><span class="glyphicon glyphicon-remove-circle close1 col-sm-1" style="cursor:pointer" aria-hidden="true"></span></td>\
				</tr><br>';
			}
		}
	//console.log(abc);
  	myFunction(abc);
	$('#shopping-cart-data').html(table_output);

		var total=0;
	 	function totalling(arr){
	 			for(var key in arr){
					total+=arr[key]["Price"];
					}
				}
		
	
	var sub_total=0;
	function subtotalling(arr){
		for(var key in arr){
				sub_total+=arr[key]["UnitPrice"];
		 
		}
	}
	totalling(abc);
	$('#grand-total').html(total);
	subtotalling(abc);
	$('#sub-total').html(sub_total);

/*remove items from cart*/
	var rem;
	$('.close1').click(function(){
		rem=$(this).parent().parent().attr('id');
		console.log(rem);
		removeItem(rem);
		$(this).parent().parent().remove();

		if(($('#table-cart >tbody >tr').length)<=2){
			$("table").remove(".padding-table");
			$("#cart-header").after("<h3><b class='text-center'>Sorry! There are no products in your cart</b></h3>");
		}
	});

	function removeItem(abc){
		var bcd=JSON.parse(localStorage.getItem("cart_list1"));
		for(var key in bcd){
			if(key==rem){
				//localStorage.removeItem(bcd[key]);
				bcd.splice(key,1);
				cart_list1=localStorage.setItem("cart_list1",JSON.stringify(bcd));

			}
		}
	}

/* terms accept button disable*/
	$("#terms-accept").attr('disabled','disabled');
    $('input[type="checkbox"]').click(function(){
	    if($(this).prop("checked") == true){
	        $("#terms-accept").removeAttr('disabled');
	    }
	    else if($(this).prop("checked") == false){
	       $("#terms-accept").attr('disabled','disabled');
	    }
	});

	$( ".qtyclass" ).on( "focus", function() {
    	rent = $(this).val();
     });
    
		// var sum = 0;
		// var sumfinal = 0;		
		// var inp = new Array();
		// 	var j;
		// 	var final = "";
		// 	$(".update-shopping-cart").on("click", function(){
		// 		final = "";
		// 		inp = [];
		// 		sum = 0;
		// 		sumfinal = 0;
		// 	    var trs = $("#shopping-cart-data").children("tr");
		// 	     $.each(trs, function(key, value) {
		// 	      	var four = $("input[name]", $("td:nth-child(3)", value)).val();
		// 	        var new1 = $("input[name]", $("td:nth-child(3)", value)).parent().parent().attr("id");
		// 	        var one = abc.new1.UnitPrice;
		// 	 		var two = abc.new1.Discount;
		// 	 		var three = abc.new1.TotalPrice;
		// 	 		 $("input[name]", $("td:nth-child(3)", value)).parent().next().html(one*four);
		// 	 		 $("input[name]", $("td:nth-child(3)", value)).parent().next().next().html( two*four);
		// 	 		 $("input[name]", $("td:nth-child(3)", value)).parent().next().next().next().html( three*four);
		// 	      		sum += parseInt($("input[name]", $("td:nth-child(3)", value)).parent().next().html());
		// 	   			sumfinal += parseInt($("input[name]", $("td:nth-child(3)", value)).parent().next().next().next().html());
		// 	   			$('#grand-total').html(sumfinal);
		// 	   			$('#sub-total').html(sum);
		//     			inp[$("input[name]", $("td:nth-child(3)", value)).parent().parent().attr("id")] =  $("input[name]", $("td:nth-child(3)", value)).val();
		//    		});
		// 		for(var key in abc)
		// 		{
		// 			final += '"' + key+ '" : ' + inp[key] + ','
		// 		}
		//     	var storedata = '{ '+final+ ' }';
		// 		console.log(storedata); 
		// 	});

});
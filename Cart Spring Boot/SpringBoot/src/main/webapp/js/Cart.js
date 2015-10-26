$(document).ready(function(){
	$.ajax({
		url:"/cartproducts",
		success:function(data){
			myFunction(data);
			var total=0;
			Total();
			//$('#grand-total').html(totalling(data));
			//$('#sub-total').html(subtotalling(data));
		}
	})

	var table_output = "";
	function myFunction(abc) {
		for(var key=0;key<abc.length;key++){
		/*	console.log(abc);
			console.log(abc[key]["discount"]);*/
				table_output +=	'<tr class="row text-center" id='+abc[key]["productID"]+' >\
				<td class="col-sm-3"><a href="#"><img src="'+ abc[key]["productimage"] +'" alt="product image" style="width:70%;height:auto;"></a></td>\
				<td class="col-sm-3"><a href="#">'+ abc[key]["description"] +'</a></td>\
				<td class="col-sm-1"><input type="number" id="qty-width" style="width:50%;" value='+getQuantity()+' max="5" min="1" class="text-center hidden-xs qtyclass class2"><span class="visible-xs">1</span></td>\
				<td class="col-sm-2 cost-color  text-center"> ₹' + abc[key]["unitPrice"] +'</td>\
				<td class="col-sm-1 cost-color  text-center"> ₹' + abc[key]["discount"] +'</td>\
				<td class="col-sm-1 cost-color  text-center totalprice"> ₹' + abc[key]["price"] +'</td>\
				<input type="hidden" class="rowindex">\
				<td><span class="glyphicon glyphicon-remove-circle close1 col-sm-1" style="cursor:pointer" aria-hidden="true"></span></td>\
				</tr><br>';
				function getQuantity(){
					var productID=abc[key]["productID"];
					console.log(productID);
					var quantity=0;
					$.ajax({
						url:"/getQty",
						async:false,
						type:"post",
						data:{"clickedProductID":productID},
						success:function(qty){
							quantity=qty;
						}
					})
					console.log("quantity"+quantity);
					return quantity;
				}
			}
		$('#shopping-cart-data').html(table_output);
		$('.close1').on("click",Closefunction);
		$(".qtyclass").on("focusout",QtyChange);
//		$(".qtyclass").focusout(function(){
//			var quantity = QtyChange();
//			
//		});
		}
		
		
/*	
	 	function totalling(arr){
	 		total=0;
	 			for(var key=0;key<arr.length;key++){
					total+=arr[key]["price"];
					}
	 			return total;
				}
		*/
	
	function subtotalling(arr){
		sub_total=0;
		for(var key=0;key<arr.length;key++){
				sub_total+=arr[key]["unitPrice"];
		 
		}
		return sub_total;
	}

	
	

/*remove items from cart*/
	var rem;
	
	function Closefunction(){
		rem=$(this).parent().parent().attr('id');
		console.log(rem);
		removeItem(rem);
		$(this).parent().parent().remove();
		$.ajax({
			url:"/deletefromcart",
			type:"post",
			data:{"clickedProductID":rem},
			success:function(){}
		});
		
		if(($('#table-cart >tbody >tr').length)<=2){
			$("table").remove(".padding-table");
			$("#cart-header").after("<h3><b class='text-center'>Sorry! There are no products in your cart</b></h3>");
		}
		location.reload();
	}

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
    
});


function QtyChange(){
	var productID=$(this).parent().parent().attr('id');
	var quantity=$(this).val();
	console.log("productID "+productID);
	console.log("quantity "+quantity);
	$.ajax({
		url:"/changeQty",
		type:"post",
		data:{"clickedProductID":productID,"quantity":quantity},
		success:function(){
		
		}
	})
		Total();
	return quantity;
}

function Total(){
	$.ajax({
		url:"/cartTotal",
		type:"post",
		success:function(total){
			$('#grand-total').html(total);
		}
	})
}
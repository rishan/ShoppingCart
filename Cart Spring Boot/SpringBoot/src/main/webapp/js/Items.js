$(document).ready(function(){
	var Itemdata={"Pair-1":{"Productimage":"../images/12.jpg",
							"Description":"Sandals asfsakf",
							"Price":900,
							"gender":"female",
							"Availability":"Available"
							},
					"Pair-2":{"Productimage":"../images/11.jpg",
							"Description":"asdsa asfasfsfasf",
							"Price":1500,
							"gender":"male",
							"Availability":"Available"
							},
					"Pair-3":{"Productimage":"../images/13.jpg",
							"Description":"asds sadsaff gdhdh",
							"Price":2000,
							"gender":"female",
							"Availability":"Out of Stock"
							},
					"Pair-4":{"Productimage":"../images/13.jpg",
							"Description":"asds sadsaff gdhdh",
							"Price":2000,
							"gender":"female",
							"Availability":"Out of Stock"
							},
					"Pair-5":{"Productimage":"../images/13.jpg",
							"Description":"asds sadsaff gdhdh",
							"Price":2000,
							"gender":"female",
							"Availability":"Out of Stock"
							},
					"Pair-6":{"Productimage":"../images/13.jpg",
							"Description":"asds sadsaff gdhdh",
							"Price":2000,
							"gender":"female",
							"Availability":"Out of Stock"
							}}
	var Item_data="";
	function pagedata(arr) {
		for(var key in arr){
			var i;
			Item_data+='<div class="col-sm-3 Item-brief-descri">\
					   <a style="cursor:pointer"><img src="'+ arr[key].Productimage +'" alt="shoe-pair-1" style="width:50%; height:100px"></a>\
					   <a style="cursor:pointer"><p class="Item-name">'+ arr[key].Description +'</p></a>\
					   <p class="Item-cost">Price: ₹'+ arr[key].Price +'</p>\
					   <p>Availability:'+ arr[key].Availability +' </p>\
					   </div>'
			}
		}
	pagedata(Itemdata);
	$('#product-data1').html(Item_data);
	$('#product-data2').html(Item_data);

	$('input:checkbox').change(function(){
		if($(this).is(":checked")){		
		Item_data="";
		$('#product-data').html(Item_data);
        console.log("" + this.name + " " + $(this).val());
        filterdata(this.name,$(this).val());
    }
    });

    function filterdata(def,abc){
		for(var key in Itemdata){
			if(Itemdata[key][def]==abc){

				Item_data+='<div class="col-sm-3 Item-brief-descri">\
					   <a style="cursor:pointer"><img src="'+ Itemdata[key].Productimage +'" alt="shoe-pair-1" style="width:50%; height:100px"></a>\
					   <a style="cursor:pointer"><p class="Item-name">'+ Itemdata[key].Description +'</p></a>\
					   <p class="Item-cost">Price: ₹'+ Itemdata[key].Price +'</p>\
					   <p>Availability:'+ Itemdata[key].Availability +' </p>\
					   </div>'
				$('#product-data1').html(Item_data);
				$('#product-data2').html(Item_data);
			}
			}
	}
});
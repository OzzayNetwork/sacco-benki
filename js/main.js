$(window).on('load', function(){
	
	new WOW().init();
	
//	custom day time picker
	$('#daily_date').on('change', function(){
		var dated=$(this).val();
		var dated=(moment(dated).format('LL'));
		$('.the_day').text(dated);
//		alert(moment(dated).format('LL'));
	});
	
	
	//decline requests
	$('.decline-btn').on('click', function(){
		$('.modal .request-container').addClass('d-none');
		$('.modal .decline-reason').removeClass('d-none');
		$(this).parent().addClass('d-none');
	});
	
	$('.canceldec-btn').on('click', function(){
		$('.modal .request-container').removeClass('d-none');
		$('.modal .decline-reason').addClass('d-none');
		$(this).parent().parent().parent().parent().parent().parent().siblings('.modal-footer').removeClass('d-none');
	});
	
	$('#associate').on('click', '.close', function(){
		$('.modal .request-container').removeClass('d-none');
		$('.modal .decline-reason').addClass('d-none');
		$('#associate .modal-footer').removeClass('d-none');
	});
	//decline requests
	
	//card deactivation
	$('.table').on('click', '.deactivator',function(){
		var the_title=$(this).parent().siblings('.std_name').text();
		$('#deactivate-title').text("Deactivate "+the_title+"'s Card");
	});
	
	//my list of blinkers
	$('.table').on('click', '.my_blinkers', function(){
		var the_title=$(this).parent().siblings('.the_guardian').children('p').children('a').text();
		$('#MyBlinkers #MyBlinkers_title').text(the_title+"'s Blinkers");
	});
	
	//my list of guardians
	$('.table').on('click', '.my_guardians', function(){
		var the_title=$(this).parent().siblings('.the_blinkers').children('p').children('a').text();
		$('#MyGuardians #MyGuardians_title').text(the_title+"'s Guardians");
	});
	
	//------------------------------------------------------------------------------------------------------
	//blocking functions
	//------------------------------------------------------------------------------------------------------
	
	//parent accounts blocking
	$('.table').on('click', '.deactivate-parent', function(){
		var the_title=$(this).parent().siblings('.the_guardian').children('p').children('a').text();
		$('#deactivate-parent #deactivate-parent-title').text("Why do you want to block "+the_title+"'s Account?");
	})
	//parent account blocking
	
	//students account blocking
	$('.table').on('click', '.deactivate-blinker', function(){
		var the_title=$(this).parent().siblings('.the_blinkers').children('p').children('a').text();
		$('#deactivate-blinker #deactivate-blinker-title').text("Why do you want to block "+the_title+"'s Account?");
	});
	//students account blocking
	
	//deactivating shop
	
	$('.table').on('click', '.deactivate-shop', function(){
		var the_title=$(this).parent().siblings('.shops_name').text();
		$('#deactivate-shop #deactivate-shop-title').text("Why do you want deactivate "+the_title+"'s shop?");
	});
	//deactivating shop
	
	//deactivating system usres
	
	$('.table').on('click', '.deactivate-user', function(){
		var the_title=$(this).parent().siblings('.the_user').children('p').text();
		$('#deactivate-user #deactivate-user-title').text("Why do you want deactivate "+the_title+"'s Account?");
	});
	//------------------------------------------------------------------------------------------------------
	//blocking functions
	//------------------------------------------------------------------------------------------------------
	
	//terminating association
	$('.table').on('click', '.terminate-association', function(){
		var the_guardian=$(this).parent().siblings('.the-guardian').children('p').text();
		var the_blinker=$(this).parent().siblings('.blinkers_name').text();
		$('#terminate-association #terminate-association-title').text("What's the reason for terminating "+the_guardian+"'s and "+the_blinker+"'s Association" );
	});
	//terminating association
	
	
	
	//decline association
	$('.table').on('click', '.disaprove-association', function(){
		var the_guardian=$(this).parent().siblings('.the-guardian').children('p').text();
		var the_blinker=$(this).parent().siblings('.blinkers_name').text();
		$('#disaprove-association #disaprove-association-title').text("What's the reason for terminating "+the_guardian+"'s and "+the_blinker+"'s Association request" );
	});
	//decline association
	
	
	
//	$('.table-ranger').on('change', function(){
//		var therange=$(this).val();
//		alert(therange);
//	});
	
	$('.table-ranger').on('change', function(){
		
	});
//	increase wigdth when value changes
	function Expand(obj){
      if (!obj.savesize) obj.savesize=obj.size;
      obj.size=Math.max(obj.savesize,obj.value.length);
     }
	
	
	
//	date ranger functions
	
	$(".date-range")[0] && $(".date-range").flatpickr({
      enableTime: !1,
	  altInput: true,
	   mode:"range",
	   altFormat: "j-F, Y",
	  dateFormat: "Y-m-d",
	  maxDate: "today",
	  minDate: "06-10-2019",
		
		
      nextArrow: '<i class="zmdi zmdi-long-arrow-right" />',
      prevArrow: '<i class="zmdi zmdi-long-arrow-left" />',
		
		//		write a function here when making changes in regards to date ranger
		
		onClose: function(selectedDates, dateStr, instance) {
			var therange=$('#date_ranger').val();
			
			//selected date range
			var dates=therange.split(' to ');
			
			//date in the format 2020-mm-dd
			var date1=dates[0];
			var date2=dates[1];
			
			// date in the format March 19, 2020
			var date1read=moment(date1).format('ddd, MMMM Do YYYY');
			var date2read=moment(date2).format('ddd, MMMM Do YYYY');
			
			//======= write custom functions bellow once a change has been made to the date range=======
			
			//function to update text output with new date range
			$('.date-range-text').text(date1read+' To '+date2read);			
			
       
    }
    });
//	full screen table

	
	 $("body").on("click", "[data-table-action]", function (a) {
      a.preventDefault();
      var b = $(this).data("table-action");
      if ("print" === b && $(this).closest(".dataTables_wrapper").find(".buttons-print").trigger("click"), "fullscreen" === b) {
        var c = $(this).parent().parent().parent().parent().parent().parent().parent()
        c.hasClass("card--fullscreen") ? (c.removeClass("card--fullscreen"), $("body").removeClass("data-table-toggled")) : (c.addClass("card--fullscreen"), $("body").addClass("data-table-toggled"))
      }
    });
//full screen controller
	
	
//	datatable navigation styling
	$('.nav-link').on('click', function(){
		event.preventDefault();
		$(this).addClass('active').parent().siblings().children('.nav-link').removeClass('active');
	});

	// $('td').eq(0).on('click', function(){
	// 	$('.modal-body-header').children('span').html("nothing");

	// 	var html_data=$('this').siblings().index(6).text();
	// 	alert(html_data);
	// });
	
	

	$('.show-all').on('click', function(){
			$('.table-all').removeClass('d-none').siblings().addClass('d-none');
		});
		
		$('.show-compliant').on('click', function(){
			$('.table-compliant').removeClass('d-none').siblings().addClass('d-none');
		});
		
		$('.show-uncompliant').on('click', function(){
			$('.table-uncompliant').removeClass('d-none').siblings().addClass('d-none');
		});
		
		$('.show-penalty').on('click', function(){
			$('.table-penalty').removeClass('d-none').siblings().addClass('d-none');
		});
	
	
	
});


//=====================================================================================
//******************membership form ******************************/
//=====================================================================================
$('.membership-form').validate();
//go gen info

//disabling function
check_gen_info();

$('.form-gen-information input').on("change", function(){
	check_gen_info();
});

$('.form-gen-information input').on("keydown", function(){
	check_gen_info();
});



$('.form-gen-information select').on("change", function(){
	check_gen_info();
});

$('.form-gen-information .dob1').on("change", function(){
	var dated=$(this).val();
	$('.form-gen-information .dob2').val(dated);
});

$('.form-gen-information .dob2').on("change", function(){
	var dated=$(this).val();
	$('.form-gen-information .dob1').val(dated);
});


function myFunction() {
	var email_address = document.getElementById("id1");
	if (!email_address.checkValidity()) {
	 
	  //alert(email_address.setCustomValidity("Input a valid email address!"));

	  email_address.setCustomValidity("I am expecting an e-mail address!");
	} else {
	  
	  alert("Input OK");
	} 
  } 

  function disable_genifo(){
	  $('.gen-info-link').parent().siblings().children().addClass('disabled');
	  $('.form-gen-information .btn-next').attr('disabled', true).addClass('disabled');
	 // alert("successfull");
  }




function check_gen_info(){
	$('.form-gen-information input[required]').each(function(index, value) {
		// myFunction()
		//alert("got them");

		var has_error=$(this).hasClass('error');
	
		var the_value=$(this).val();
		var nationality=$('.form-gen-information .nationality-form').val();
		$('.form-gen-information .nationality-form').removeClass('border-danger');

		//alert(nationality);
		var gender=$('.form-gen-information .gender-form').val();
		$('.form-gen-information .gender-form').removeClass('border-danger');

		//alert(gender);
		var status=$('.form-gen-information .status-form').val();
		$('.form-gen-information .status-form').removeClass('border-danger');
		//alert(status);
		var country=$('.form-gen-information .country-form').val();
		$('.form-gen-information .country-form').removeClass('border-danger')
		//alert(country);	

		$(this).removeClass('border-danger');
		
	
		if(the_value==""){
			disable_genifo();
			$(this).addClass('border-danger');
			return false;
			// alert("value is empty");			
		}
		if(has_error==true){
			
			disable_genifo();
			$(this).addClass('border-danger');
			return false;
			// alert("value is empty");			
		}		
		
		if(nationality==0){
			disable_genifo();
			$('.form-gen-information .nationality-form').addClass('border-danger')
			return false;

			
		}
		if(gender==0){
			disable_genifo();
			$('.form-gen-information .gender-form').addClass('border-danger')

			return false;
		}

		if(status==0){
			disable_genifo();
			$('.form-gen-information .status-form').addClass('border-danger')

			return false;
			
		}

		if(country==0){
			disable_genifo();
			$('.form-gen-information .country-form').addClass('border-danger')

			return false;
		}		
			
		
		if(the_value!==""){
			$('.form-gen-information .btn-next').attr('disabled', false).removeClass('disabled');
			$(this).removeClass('border-danger');
			$('.nav-link .occupation-link').removeClass('disabled');
			//alert("value is not empty");
			//alert(the_value);
		}
		
	  });
}
//disabling function
$('a.gen-prev').on('click', function(){
	$(this).parent().parent("div").addClass('d-none').prev().removeClass('d-none');
	$('.gen-info-link').removeClass('disabled').addClass('active').parent().siblings().children().removeClass('active');

});

$('a.gen-info-link').on('click', function(){
	$('.form-gen-information').removeClass('d-none').siblings('.row').addClass('d-none');
	$(this).removeClass('disabled').addClass('active').parent().siblings().children().removeClass('active');

});
//******************occupation form functions **************************************/
function disable_occupation(){
	$('.gen-info-link').parent().siblings().children().addClass('disabled');
	$('.occupation-link').removeClass('disabled');
	$('.form-occupation .btn-next').attr('disabled', true).addClass('disabled');
   // alert("successfull");
}

$('.form-occupation .occupation-text').on('change', function(){
	var employed_has_dnone=$(".form-occupation .employer-opt").hasClass('d-none');
	var occupation=$(this).val();
	//alert(occupation);
	if(occupation=="Employment"){
		$('.employer-opt').removeClass('d-none').siblings('.business-opt').addClass('d-none');
		
		$('.employer-opt .emp-employer').attr("pattern", '^[0-9a-zA-Z\\s]{2,100}$');
		$('.employer-opt .emp-position').attr("pattern", '^[0-9a-zA-Z\\s]{2,100}$');
		$('.employer-opt .emp-employer').attr("pattern", '^[0-9a-zA-Z\\s]{2,100}$');
		$('.employer-opt .emp-income').attr("pattern", '^[0-9]{2,10000}$');
		$('.employer-opt .emp-staff-num').attr("pattern", "^[^$%?#!<>*+'\\x22]+$");
		
		$('.employer-opt .must-input').each(function(index, value){
			$(this).attr('required', '');
		});
	}

	// employed
	if(employed_has_dnone==false){

		checkEmployedValidity();
	
		$(".form-occupation .employer-opt input").on("keydown", function(){
			checkEmployedValidity();
		});
		
	
		function checkEmployedValidity(){
			$('.employer-opt input').each(function(index, value){
	
				$(this).removeClass('border-danger');
				var has_error=$(this).hasClass('error');
				// var has_required=$(this).hasAttribute('required');
	
				//alert(has_required);
				
				if(has_error==true){
					disable_occupation()
					$(this).addClass('border-danger');
					alert(has_error);
					return false;
				}
				else{
					$('.gen-info-link').parent().next().children().removeClass('disabled');				
					$('.form-occupation .btn-next').attr('disabled', false).removeClass('disabled');
				}
			});
		}
	}


});

//check for errors
//alert(employed_has_dnone);





//employment validationn of inputs


//go to occupation
$('a.occupation-next').on('click', function(){
	//e.preventDefault();
	$(this).parent().parent("div").addClass('d-none').next().removeClass('d-none');
	$('.occupation-link').removeClass('disabled').addClass('active').parent().siblings().children().removeClass('active');
});

$('a.occupation-link').on('click', function(){
	$('.form-occupation').removeClass('d-none').siblings('.row').addClass('d-none');
	$(this).removeClass('disabled').addClass('active').parent().siblings().children().removeClass('active');

});

$('a.occ-prev').on('click', function(){
	$(this).parent().parent("div").addClass('d-none').prev().removeClass('d-none');
	$('.occupation-link').removeClass('disabled').addClass('active').parent().siblings().children().removeClass('active');
});

//go to beneficiaries
$('a.ben-next').on('click', function(){
	$(this).parent().parent("div").addClass('d-none').next().removeClass('d-none');
	$('.ben-link').removeClass('disabled').addClass('active').parent().siblings().children().removeClass('active');;
});


$('a.ben-link').on('click', function(){
	$('.form-ben').removeClass('d-none').siblings('.row').addClass('d-none');
	$(this).removeClass('disabled').addClass('active').parent().siblings().children().removeClass('active');

});

$('a.ben-prev').on('click', function(){
	$(this).parent().parent("div").addClass('d-none').prev().removeClass('d-none');
	$('.ben-link').removeClass('disabled').addClass('active').parent().siblings().children().removeClass('active');
});


//go to documents
$('a.attach-next').on('click', function(){
	$(this).parent().parent("div").addClass('d-none').next().removeClass('d-none');
	$('.doc-link').removeClass('disabled').addClass('active').parent().siblings().children().removeClass('active');;

});

$('a.doc-link').on('click', function(){
	$('.form-attach').removeClass('d-none').siblings('.row').addClass('d-none');
	$(this).removeClass('disabled').addClass('active').parent().siblings().children().removeClass('active');

});

$('a.attach-prev').on('click', function(){
	$(this).parent().parent("div").addClass('d-none').prev().removeClass('d-none');
	$('.doc-link').removeClass('disabled').addClass('active').parent().siblings().children().removeClass('active');
});


//go to save
$('a.fund-next').on('click', function(){
	$(this).parent().parent("div").addClass('d-none').next().removeClass('d-none');
	$('.save-link').removeClass('disabled').addClass('active').parent().siblings().children().removeClass('active');

});

$('a.save-link').on('click', function(){
	$('.form-save').removeClass('d-none').siblings('.row').addClass('d-none');
	$(this).removeClass('disabled').addClass('active').parent().siblings().children().removeClass('active');

});



//occupation functions

$('.occupation-text').on("change", function(){
	var occupation=$(this).text();
});

$('#nat-id').on('change', function(){

	var file = $(this).val();
	var fullPath = $(this).val();

	var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
    var filename = fullPath.substring(startIndex);
    if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
        filename = filename.substring(1);
    }
    
	
	if(file=="" ){ 
		alert("No files selected") ; 
		$(".id-container").removeClass("activated");
		$(".id-container small strong").text("No file selected");
		$(".id-container small").addClass("text-danger").removeClass("text-success");

		
	} else { 
		$(".id-container").addClass("activated");		
		$(".id-container small strong").text("File ("+filename+ ") Selected");
		$(".id-container small").addClass("text-success").removeClass("text-danger");
	} 
	//id-container
});

$('#kra-pin').on('change', function(){

	var file = $(this).val();
	var fullPath = $(this).val();

	var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
    var filename = fullPath.substring(startIndex);
    if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
        filename = filename.substring(1);
    }
    
	
	if(file=="" ){ 
		alert("No files selected") ; 
		$(".kra-container").removeClass("activated");
		$(".kra-container small strong").text("No file selected");
		$(".kra-container small").addClass("text-danger").removeClass("text-success");

		
	} else { 
		$(".kra-container").addClass("activated");		
		$(".kra-container small strong").text("File ("+filename+ ") Selected");
		$(".kra-container small").addClass("text-success").removeClass("text-danger");
	} 
	
});

$('#user-photo').on('change', function(){

	var file = $(this).val();
	var fullPath = $(this).val();

	var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
    var filename = fullPath.substring(startIndex);
    if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
        filename = filename.substring(1);
	}
	alert("changed");
    
	
	if(file=="" ){ 
		// alert("No files selected") ; 
		$(".user-photo-container").removeClass("activated");
		$(".user-photo-container small strong").text("No file selected");
		$(".user-photo-container small").addClass("text-danger").removeClass("text-success");

		
	} else { 
		$(".user-photo-container").addClass("activated");		
		$(".user-photo-container small strong").text("File ("+filename+ ") Selected");
		$(".user-photo-container small").addClass("text-success").removeClass("text-danger");
	} 
	
});

$('#mpesa-statement').on('change', function(){

	var file = $(this).val();
	var fullPath = $(this).val();

	var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
    var filename = fullPath.substring(startIndex);
    if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
        filename = filename.substring(1);
    }
    
	
	if(file=="" ){ 
		alert("No files selected") ; 
		$(".mpesa-statement-container").removeClass("activated");
		$(".mpesa-statement-container small strong").text("No file selected");
		$(".mpesa-statement-container small").addClass("text-danger").removeClass("text-success");

		
	} else { 
		$(".mpesa-statement-container").addClass("activated");		
		$(".mpesa-statement-container small strong").text("File ("+filename+ ") Selected");
		$(".mpesa-statement-container small").addClass("text-success").removeClass("text-danger");
	} 
	
});

//=====================================================================================
//******************membership form ******************************/
//=====================================================================================


//owl initializer
$(document).ready(function(){

	var owl = $('.owl-carousel');
	owl.owlCarousel({
		
		items:4,
		loop:true,
		margin:10,
		autoplay:true,
		autoplayTimeout:15000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:1
			},
			992:{
				items:2
			},
			1200:{
				items:3
			},
			1440:{
				items:4
			}
		}
	});

  });
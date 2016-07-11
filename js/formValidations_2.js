function adminDeleteRecord(controller,delete_id)
{
	var path="index.php?r="+controller+"/delete&id="+delete_id;						
		$.ajax({ 
		url: path,
		type: "POST"
		}).done(function(html){
			window.location.reload();
		});		
}



$(function(){
$(".search").keyup(function() 
{ 
var searchid = $(this).val();
var dataString = 'search='+ searchid;
if(searchid!='')
{
	$.ajax({
	type: "POST",
	url: "index.php?r=UserGroups/Livesearch",
	data: dataString,
	cache: false,
	success: function(html)
	{
	$("#result").html(html).show();
	}
	});
}return false;    
});

jQuery("#result").live("click",function(e){ 
	var $clicked = $(e.target);
	var $name = $clicked.find('.name').html();
	var decoded = $("<div/>").html($name).text();
	$('#searchid').val(decoded);
});
jQuery(document).live("click", function(e) { 
	var $clicked = $(e.target);
	if (! $clicked.hasClass("search")){
	jQuery("#result").fadeOut(); 
	 
	}
});

$('#searchid').click(function(){
	jQuery("#result").fadeIn();
});
});






$("#forgot_pass").click(function(){
	$(".reset_pass_tr").toggle(200);	
});


function ResetEmail()
{
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
	var forget_email=$("#forget_email").val();
	if(emailReg.test(forget_email)  && forget_email!=""){
	   $("#Reset_email_error").html("").hide();
	   
	   $.ajax({ 
			url: "index.php?r=Administrator/resetpassword",
			type: "POST",
			data: {'forget_email' : forget_email},
			beforeSend: function(){
				$("#Reset_email_error").html('<img src="loader.gif"/>');
			}
			}).done(function(html){
				if(parseInt(html)==1){
					 $("#Reset_email_error").html("The email you have entered was not found.").show();
				}else{
					$("#success_info_div").html("An email has been sent to your email address");
					 $("#Reset_email_error").html("").hide();
				}
			});		
	}else{
	   $("#Reset_email_error").html("Enter a valid email address").show();
	}  
}

	
function highlightMenu(menu_name)
	{
		$( "li" ).each(function( index ) {
			if($( this ).text()==menu_name)
			{
				$( this ).addClass('active');
			}
		});
	}
function formFieldValue(field)
{
	return fieldvalue=document.getElementById(field).value;
}


function validateRegions()
{
	var Regions_continent_id=$("#Regions_continent_id").val();
	var Regions_title=$("#Regions_title").val();
	var Regions_status=$("#Regions_status").val();
	if(Regions_continent_id!==""){
		$("#continent_error").removeClass('error').html('').hide();
		if(Regions_title!==""){
			$("#title_error").removeClass('error').html('').hide();
			if(Regions_status!==""){
				$("#status_error").removeClass('error').html('').hide();
				$("#regions-form").submit();
			}else{
				$("#status_error").addClass('error').html('Please select the status.').show();
			}
		}else{
			$("#title_error").addClass('error').html('Please enter the title.').show();
		}
	}else{
		$("#continent_error").addClass('error').html('Please select the continent.').show();
	}
}

function validateClients()
{
var Clients_logo=$("#Clients_logo").val();
var image_file=$("#image_file").val();
var Clients_sector_id=$("#Clients_sector_id").val();
var Clients_title=$("#Clients_title").val();
var Clients_entry_number=$("#Clients_entry_number").val();
var Clients_client_desc=$("#Clients_client_desc").val();
var Clients_contact_person=$("#Clients_contact_person").val();
var Clients_email=$("#Clients_email").val();
var Clients_status=$("#Clients_status").val();
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 

	if(image_file=="" && Clients_logo=="")
	{
		var ext="";
	}else if(image_file!="" && Clients_logo=="")
	{
		var ext="gif";
	}else if(image_file=="" && Clients_logo!="")
	{
		var ext = Clients_logo.split('.').pop(); 
	}else{
		var ext = Clients_logo.split('.').pop(); 
	}
	if(ext=="gif" || ext=="png" || ext=="jpg"|| ext=="svg"){
		$("#logo_error").removeClass('error').html('').hide();
		if(Clients_sector_id!==""){
			$("#sector_error").removeClass('error').html('').hide();
			if(Clients_title!==""){
				$("#title_error").removeClass('error').html('').hide();
				if(Clients_client_desc!==""){
					$("#description_error").removeClass('error').html('').hide();
						if(Clients_contact_person!==""){
							$("#contact_person_error").removeClass('error').html('').hide();
								if(emailReg.test(Clients_email) && Clients_email!=""){
									$("#email_error").removeClass('error').html('').hide();
									if(Clients_status!==""){
										$("#status_error").removeClass('error').html('').hide();
										$("#clients-form").submit();
									}else{
										$("#status_error").addClass('error').html('Please select the status.').show();
									}
								}else{
									$("#email_error").addClass('error').html('Please enter a valid client email.').show();
								}
						}else{
							$("#contact_person_error").addClass('error').html('Please enter the contact person.').show();
						}
				}else{
					$("#description_error").addClass('error').html('Please enter the client description.').show();
				}
			}else{
				$("#title_error").addClass('error').html('Please enter the client name.').show();
			}
		}else{
			$("#sector_error").addClass('error').html('Please select the sector.').show();
		}
	}else{
		$("#logo_error").addClass('error').html('Only .GIF,.PNG and .JPG files are allowed.').show();
	}
}

function validateSector()
{
	var Sectors_title=$("#Sectors_title").val();
	var Sectors_sector_desc=$("#Sectors_sector_desc").val();
	var Sectors_status=$("#Sectors_status").val();
	if(Sectors_title!==""){
		$("#title_error").removeClass('error').html('').hide();
		if(Sectors_sector_desc!==""){
			$("#description_error").removeClass('error').html('').hide();
			if(Sectors_status!==""){
				$("#status_error").removeClass('error').html('').hide();
				$("#sectors-form").submit();
			}else{
				$("#status_error").addClass('error').html('Please select the status.').show();
			}
		}else{
			$("#description_error").addClass('error').html('Please enter the description.').show();
		}
	}else{
		$("#title_error").addClass('error').html('Please enter the sector name.').show();
	}
}


function validateContinent()
{
	var Continent_title=$("#Continent_title").val();
	var Continent_status=$("#Continent_status").val();
	
	if(Continent_title!==""){
		$("#title_error").removeClass('error').html('').hide();
		if(Continent_status!==""){
			$("#status_error").removeClass('error').html('').hide();
			$("#continent-form").submit();
		}else{
			$("#status_error").addClass('error').html('Please select the status.').show();
		}
	}else{
		$("#title_error").addClass('error').html('Please enter the continent name.').show();
	}
}



function validateCountries()
{
var Countries_flag_image=$("#Countries_flag_image").val();
var image_file=$("#image_file").val();
var Countries_continent_id=$("#Countries_continent_id").val();
var Countries_region_id=$("#Countries_region_id").val();
var Countries_title=$("#Countries_title").val();
var Countries_country_code=$("#Countries_country_code").val();
var Countries_capital=$("#Countries_capital").val();
var Countries_status=$("#Countries_status").val();
	if(image_file=="" && Countries_flag_image=="")
	{
		var ext="";
	}else if(image_file!="" && Countries_flag_image=="")
	{
		var ext="gif";
	}else if(image_file=="" && Countries_flag_image!="")
	{
		var ext = Countries_flag_image.split('.').pop(); 
	}else{
		var ext = Countries_flag_image.split('.').pop(); 
	}
	if(ext=="gif" || ext=="png" || ext=="jpg"|| ext=="svg"){
		$("#flag_error").removeClass('error').html('').hide();
		if(Countries_continent_id!==""){
			$("#continent_error").removeClass('error').html('').hide();
			if(Countries_region_id!==""){
				$("#region_error").removeClass('error').html('').hide();
				if(Countries_title!==""){
					$("#country_error").removeClass('error').html('').hide();
					if(Countries_country_code!==""){
						$("#country_code_error").removeClass('error').html('').hide();
						if(Countries_capital!==""){
							$("#capital_error").removeClass('error').html('').hide();
							if(Countries_status!==""){
								$("#status_error").removeClass('error').html('').hide();
								$("#countries-form").submit();
							}else{
								$("#status_error").addClass('error').html('Please select the status.').show();
							}
						}else{
							$("#capital_error").addClass('error').html('Please enter the country capital city.').show();
						}
					}else{
						$("#country_code_error").addClass('error').html('Please enter the country code.').show();
					}
				}else{
					$("#country_error").addClass('error').html('Please enter the country name.').show();
				}
			}else{
				$("#region_error").addClass('error').html('Please select the region.').show();
			}
		}else{
			$("#continent_error").addClass('error').html('Please select the continent.').show();
		}
	}else{
		$("#flag_error").addClass('error').html('Only .GIF,.PNG and .JPG files are allowed.').show();
	}
}


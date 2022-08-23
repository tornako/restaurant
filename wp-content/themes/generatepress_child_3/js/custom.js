/*
const options = {
  cache: false,
  plugins: [
        new SwupHeadPlugin({
		  persistAssets: true
		}),
        new MashvpSwupHtmlLangPlugin({})
    ],
};

const swup = new Swup(options); 


  
const init = function() { }
swup.on('contentReplaced', init);
*/

/*
function unload() {
    alert('ok');
}

swup.on('willReplaceContent', unload);
*/


jQuery(document).ready(function( $ ) {
	
	/*SELECTOR D'IDIOMES*/
	// Inspiration: https://tympanus.net/codrops/2012/10/04/custom-drop-down-list-styling/


	function DropDown(el) {
		this.dd = el;
		this.placeholder = this.dd.children('span');
		this.opts = this.dd.find('ul.drop li');
		this.val = '';
		this.index = -1;
		this.initEvents();
	}

	DropDown.prototype = {
		initEvents: function () {
			var obj = this;
			obj.dd.hover( function (e) {
				e.preventDefault();
				e.stopPropagation();
				//$(this).toggleClass('active');
				$(this).addClass('active');
			},
			function () {
				 $(this).removeClass('active');
			}
			);
			obj.opts.on('click', function () {
				var opt = $(this);
			  
				obj.val = opt.text();
				obj.index = opt.index();
				obj.placeholder.text(obj.val);
				opt.siblings().removeClass('selected');
				opt.filter(':contains("' + obj.val + '")').addClass('selected');
			}).change();
		},
		getValue: function () {
			return this.val;
		},
		getIndex: function () {
			return this.index;
		}
	};

	$(function () {
		// create new variable for each menu
		var dd1 = new DropDown($('#noble-gases'));
		// var dd2 = new DropDown($('#other-gases'));
		$(document).click(function () {
			// close menu on document click
			$('.wrap-drop').removeClass('active');
		});
	});
	/*FI SELECTOR D'IDIOMES*/
	
	//alert(testpage_obj.idioma_actual);
	//changeLanguage(testpage_obj.idioma_actual);
	
	function changeLanguage(clickedLangChoiceId) {
		
		//localStorage.setItem('idioma',testpage_obj.idioma_actual);
		
		jQuery(function() {
			jQuery.getJSON(testpage_obj.json_data + clickedLangChoiceId + ".json", function(jsonData) {
            //jQuery.getJSON("../lang/" + clickedLangChoiceId + ".json", function(jsonData) {
                
				/*
				jQuery("#greetings-list").children(".greet").each(function() {
                    let currentlyIteratedGreetKey = jQuery(this).attr("key");
                    let localizedValForGreetKey = jsonData[currentlyIteratedGreetKey];
                    jQuery(this).text(localizedValForGreetKey);
                });
				*/
				
				jQuery('.tra').each(function(index, element) {
					let currentlyIteratedGreetKey = jQuery(this).attr("tra"); //recullo l'atribut tra=""
					
					if(currentlyIteratedGreetKey){
						
						var count = currentlyIteratedGreetKey.split('_').length;
						let paraules = [];
						paraules = currentlyIteratedGreetKey.split('_');
						let localizedValForGreetKey;
						console.log(paraules[0]);
						
						switch (count) {
							case 1:
								count = 0;
								var paraules0 = paraules[0];
								
								//localizedValForGreetKey = jsonData[currentlyIteratedGreetKey];
								localizedValForGreetKey = jsonData[paraules0];
								break;
							case 2:
								count = 0;
								var paraules0 = paraules[0];
								var paraules1 = paraules[1];
								
								localizedValForGreetKey = jsonData[paraules0][paraules1];
								//localizedValForGreetKey = jsonData[ paraules[0] ][ paraules[1] ];
								break;
							case 3:
								count = 0;
								var paraules0 = paraules[0];
								var paraules1 = paraules[1];
								var paraules2 = paraules[2];
								localizedValForGreetKey = jsonData[paraules0][paraules1][paraules2];
								break;
						}

						
						
						jQuery.expr[':'].hasText = function(element, index) {
						 // if there is only one child, and it is a text node
						 if (element.childNodes.length == 1 && element.firstChild.nodeType == 3) {
							return jQuery.trim(element.innerHTML).length > 0;
						 }
						 return false;
						};
						console.log( jQuery(':hasText', this) );
						jQuery(':hasText', this).text(localizedValForGreetKey);
					
					}
					
				
				});
			});
			
		});
		
		/*
		jQuery(function() {
			jQuery("#greetings-list").children(".greet").each(function() {
				let currentlyIteratedGreetKey = jQuery(this).attr("key");
				let localizedValForGreetKey = langResourcesArr[clickedLangChoiceId][currentlyIteratedGreetKey];
				jQuery(this).text(localizedValForGreetKey);
			});
			
			jQuery('.tra').each(function(index, element) {
				let currentlyIteratedGreetKey = jQuery(this).attr("tra");
				//let currentlyIteratedGreetKey =  jQuery(this).find('h3').text();
				
				let localizedValForGreetKey = langResourcesArr[clickedLangChoiceId][currentlyIteratedGreetKey];
				//jQuery('*', this).get().map().text(localizedValForGreetKey);
				
				//https://stackoverflow.com/questions/1018855/finding-elements-with-text-using-jquery
				jQuery.expr[':'].hasText = function(element, index) {
					 // if there is only one child, and it is a text node
					 if (element.childNodes.length == 1 && element.firstChild.nodeType == 3) {
						return jQuery.trim(element.innerHTML).length > 0;
					 }
					 return false;
				};
				console.log( jQuery(':hasText', this) );
				jQuery(':hasText', this).text(localizedValForGreetKey);
				
			});
			
		});
		*/
		
	}
	
	
	
	jQuery( '.lang-choice' ).each(function(index) {
		jQuery(this).on("click", function(){
			
			var mammalKey = jQuery(this).attr('id');
			changeLanguage(mammalKey);
			
			//Canvio l'atribut LANG i li poso l'idioma seleccionat
			//document.documentElement.setAttribute("lang", mammalKey);
			
		});
	});
	
	
	
	/*
	$("#google-reviews").googlePlaces({
		placeId: 'ChIJuZpnJOhppBIRgh2hk4gajQo',
		render: ['reviews'],
		min_rating: 3,
		max_rows: 0
	});
	*/
	
	/*
	var request = {
	  placeId: 'ChIJuZpnJOhppBIRgh2hk4gajQo',
	  //fields: ['name', 'rating', 'formatted_phone_number', 'geometry']
	};

	service = new google.maps.places.PlacesService(map);
	service.getDetails(request, callback);

	function callback(place, status) {
	  if (status == google.maps.places.PlacesServiceStatus.OK) {
		console.log(place);
		$.each(place.reviews, function(i, f) {
			var tblRow = "<tr>" + "<td>" + f.author_name + "</td>" +
			"<td>" + f.rating + "</td>" + "<td>" + f.relative_time_description + "</td>" + "<td>" + f.text + "</td>" + "</tr>"
			$(tblRow).appendTo("#google-reviews");
		});
	  }
	}
	*/
	
	
	var currentDate = new Date();
	var weekday = [];
	weekday[0] = "Diumenge"; //Sunday
	weekday[1] = "Dilluns"; //Monday
	weekday[2] = "Dimarts"; //Tuesday
	weekday[3] = "Dimecres"; //Wednesday
	weekday[4] = "Dijous"; //Thursday
	weekday[5] = "Divendres"; //Friday
	weekday[6] = "Dissabte"; //Saturday

	var currentDay = weekday[currentDate.getDay()];

	var currentTimeHours = currentDate.getHours();
	currentTimeHours = currentTimeHours < 10 ? "0" + currentTimeHours : currentTimeHours;
	var currentTimeMinutes = currentDate.getMinutes();
	var timeNow = currentTimeHours + "" + currentTimeMinutes;

	var currentDayID = "#" + currentDay; //gets todays weekday and turns it into id
	
	$('body '+currentDayID).each(function(){
	//$(currentDayID).each(function () {
		$(this).toggleClass("today"); //this works at hightlighting 
	});
	/*
	$( currentDayID ).each(function( index ) {
		$(this).toggleClass("today"); //this works at hightlighting today
	});
	*/
	var openTimeSplit = $(currentDayID).children('.opens').text().split(":");

	var openTimeHours = openTimeSplit[0];
	openTimeHours = openTimeHours < 10 ? "0" + openTimeHours : openTimeHours;

	var openTimeMinutes = openTimeSplit[1];
	var openTimex = openTimeSplit[0] + openTimeSplit[1];

	var closeTimeSplit = $(currentDayID).children('.closes').text().split(":");

	var closeTimeHours = closeTimeSplit[0];
	closeTimeHours = closeTimeHours < 10 ? "0" + closeTimeHours : closeTimeHours;
	

	var closeTimeMinutes = closeTimeSplit[1];
	var closeTimex = closeTimeSplit[0] + closeTimeSplit[1];
	
	/* Faig una trampa per si l'establiment tanca més tard de les 23:59*/
	if(closeTimex < openTimex){
		closeTimex = parseInt(closeTimex);
		closeTimex += parseFloat(2400)
		//alert(closeTimex);
	}
	
	/**/

	if (timeNow >= openTimex && timeNow <= closeTimex) {
		$(".openorclosed").toggleClass("open");
	} else {
		$(".openorclosed").toggleClass("closed");
	}
	
});
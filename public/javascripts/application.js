
$(document).ready(function() {
	
	var $container = $('#isotope-container');
	var $aid_times = []
	

	//$container.find('.description').hide();
	//$container.find('.weight').hide(); 
	//$('#isotope-container').show();
	 
		$container.isotope({
			itemSelector: '.element',
			getSortData : {
				weight : function( $elem ) {
				            return parseFloat( $elem.find('.weight').text() );
				          }
			},
			sortBy : 'weight',
			sortAscending : false,
			
			masonry : {
				columnWidth : 1
			},
			
			animationEngine : 'jquery'
		});

$('.element').live('click', function(e){
	window.onbeforeunload = function () {                       
         return "Moving away from here. Sure?";
    }
 
	location.hash = window.pageYOffset;
	$aid = $(this)
	rel_text = $aid.find('.symbol').text()
	
	$aid.css("opacity","0.1")
	$.fancybox({
				//'orig'			: $(this),
				'padding'		: 0,
				'href'			:$aid.attr("rel"),
				'width' : '100%',
				 'height' : '100%',
				 'autoScale' : false,
				 'transitionIn' : 'none',
				 'transitionOut' : 'none',
				 'type' : 'iframe',
				
			});
	
    
   //$("#viewed-links ul").append('<li rel='+$aid.attr("rel")+'><a href="'+$aid.attr("rel")+'">'+ rel_text.substring(0,50) +'</a></li>');	
   e.preventDefault();
});

/*
$('.element').live('click', function(e){

	$(this).toggleClass('large');
	
	$(this).find('.description').toggle();
	$container.isotope('reLayout');

// return false;
});
*/

});


jQuery(function($) {
	$(document).ready(function() {
		

		$("#loading-image").toggle();
		var $container = $('#isotope-container');
		$i = 0

		

		//$("#searchbutton")
		$('.defring').live('ajax:beforeSend', function() { 
			$("#loading-image").toggle();

		})
		$('.defring').live('ajax:success', function(data, status, xhr) {
			var $container = $('#isotope-container');
			var $oldselector = "";
			$("#loading-image").toggle();
			

			$('.element').die('click');
			//alert("success")
			// sorting
			

		})
		$('.defring').live('ajax:failure', function(xhr, status, error) {
			alert("failure!");
		})
		$('.defring').live('ajax:complete', function() {
			//alert("complete!");
			//alert($i)
			$i++;
			var $container = $('#isotope-container');
			$container.find('.description').hide();
		
			
				$container.isotope( 'reloadItems' ).isotope({
					sortBy : 'weight',
					sortAscending : false
				});

		$('.element').live('click', function(){

					window.onbeforeunload = function () {                       
				         return "Moving away from here. Sure?";
				    }

					location.hash = window.pageYOffset;
					$aid = $(this)
					rel_text = $aid.find('.symbol').text()

					$aid.css("opacity","0.1")
					$.fancybox({
								//'orig'			: $(this),
								'padding'		: 0,
								'href'			:$aid.attr("rel"),
								'width' : '100%',
								 'height' : '100%',
								 'autoScale' : false,
								 'transitionIn' : 'none',
								 'transitionOut' : 'none',
								 'type' : 'iframe',

							});


				   //$("#viewed-links ul").append('<li rel='+$aid.attr("rel")+'><a href="'+$aid.attr("rel")+'">'+ rel_text.substring(0,50) +'</a></li>');	
				   e.preventDefault();
				});
		});
	});
});


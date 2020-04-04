
$(document).ready(function(){


	$('.toggle').click(function(){
	
		$('.menu ul').slideToggle(1500,'easeOutBounce');
		
		return false;
	});

	$('.main_slider').owlCarousel({
		
		singleItem 	   : true,
		autoPlay   	   : 2000,
		navigation 	   : true,
		navigationText : ["<i class='fa fa-arrow-left' aria-hidden='true'></i>","<i class='fa fa-arrow-right' aria-hidden='true'></i>"]
	
	});
	
	$('.faq').accordion({
		
	});
	    $( ".dan" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
        $( ".dan li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );

		$('.gellary a').prettyPhoto();
		
	$('.arrow a').click(function(){
		$('body,html').animate({scrollTop:0}, 500);
		return false;
	});
	
		
	$(window).scroll(function(){
		var top = $(window).scrollTop();
		if(top > 200){
			$('.arrow').fadeIn(500);
			
		}else{
			$('.arrow').fadeOut(500);
		}
	});
			
});
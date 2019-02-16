$(function(){

	/*function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};

	heightDetect();
	$(window).resize(function(){
		heightDetect();
	});*/

	if ($('#language-selected').is(':empty')){
	  $( ".menu li" ).each(function() {
	    if($(this).attr('class') == 'selected'){
	    	var selected = $(this).find('.lang-code').html().toUpperCase();
	        console.log($(this).find('.lang-code').html().toUpperCase());
	        $("#language-selected").html(selected);
	    }
	  });
	}

	//The next following line displays and set selected language
	  $(".dropdownbox").click(function(){
		$(".menu").toggleClass("showMenu");
		  $(".menu > li").click(function(){
		    var selected = $(this).find('.lang-code').html().toUpperCase();
		    console.log($(this).find('.lang-code').html().toUpperCase());
		    $("#language-selected").html(selected);
		    $(".menu").removeClass("showMenu");	        
	      });
	  });
	
	  //Close language select box if nothing is selected
	  $("#dropdown-wrapper").mouseleave(function(){
		  $(".menu").removeClass("showMenu");
	  });

	  //owl
	  var owl = $('.slider');
owl.owlCarousel({
	loop: true,
	items: 1,
	dots: false	

});
// Go to the next item
$('.next').click(function() {
    owl.trigger('next.owl.carousel');
});
$('.prev').click(function() {    
    owl.trigger('prev.owl.carousel');    
}); 

$(".team_slider").owlCarousel({
	loop: true,
	items: 1	
});
$(".new_but a").mPageScroll2id();
$(".we_img").animated("fadeIn", "fadeOut");

});
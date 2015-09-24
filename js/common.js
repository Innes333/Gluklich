$(document).ready(function() {
	
	
	$('header').height($(window).height());


   $("#owl,#owl1,#owl2").owlCarousel({ 

      navigation : true, // Show next and prev buttons
      slideSpeed : 400,
      autoPlay: false,
      paginationSpeed : 400,
      singleItem:true,
      pagination: false 

  });
 

	//form valid
 //	$("input,select,textarea").not("[type=submit]").jqBootstrapValidation();

});


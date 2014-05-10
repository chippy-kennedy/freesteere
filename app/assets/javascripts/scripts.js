

$(document).ready(function()
  {

  /*Mouse Hover Over*/
  $("#free").mouseenter(function(){
  	
    $("#free").fadeOut(300,function(){
  		$(this).text("FREE BEER!!").fadeIn(0);

  
    /*TODO:Make Bold on Hover Over:*/
    /*$(this).animate({
      width:50%;
      height:50%;

    });*/
    
	
	var i = 0;
  	do{
    $("#body")	.animate({backgroundColor:"blue"}, 300)
    				.animate({backgroundColor:"red"}, 300)
    				.animate({backgroundColor:"purple"}, 300)
    				.animate({backgroundColor:"green"}, 300)
    				.animate({backgroundColor:"yellow"}, 300)
    				.animate({backgroundColor:"orange"}, 300);
    				i++;
    	}
    	while(i<25)
  	
  	});

    

  });


  /*Mouse Not Hover Over*/
  $("#free").mouseleave(function(){
   	/* $("#body").animate({backgroundColor:"white"}, 4000, swing, complete);*/
  	
  	$("#body").stop(true, false).fadeIn();
  	$("#body").animate({backgroundColor:"white"},300);

  	$("#free").fadeOut(300,function(){
  		$(this).text("free steere").fadeIn(300);
  	});
  });


  /*Stop animation if mouse leaves page*/
  $("#body").mouseleave(function() {
    $("#body").stop(true, false).fadeIn();
    $("#body").animate({backgroundColor:"white"},300);

    $("#free").fadeOut(300,function(){
      $(this).text("free steere").fadeIn(300);
    });;
  });


});




	
				
			
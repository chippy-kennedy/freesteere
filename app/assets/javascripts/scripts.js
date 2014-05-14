
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
    
  	});

    var i = 0;
    do{
    $("#body")  .animate({backgroundColor:"blue"}, 300)
            .animate({backgroundColor:"red"}, 300)
            .animate({backgroundColor:"purple"}, 300)
            .animate({backgroundColor:"green"}, 300)
            .animate({backgroundColor:"yellow"}, 300)
            .animate({backgroundColor:"orange"}, 300);
            i++;
      }
      while(i<25)

  });/*End: Mouse Hover Over*/


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
  });/*End: Mouse Not Hover Over*/

});

/*Function to Generate Random Song*/



function newSong() {

  var unPickedSongs = new Array();

  unPickedSongs[0]="The Way We Move";
  unPickedSongs[1]="Going Out in Style - Dropkick...";/**/
  unPickedSongs[2]="It's So Hot - 4th Pyramid";/**/
  unPickedSongs[3]="Come Together - Spaceman";/**/
  unPickedSongs[4]="The Boom - T. Mills";/**/
  unPickedSongs[5]="Man Up - The Blue Van";/**/
  unPickedSongs[6]="Almost Famous - Big Freedia";/**/
  unPickedSongs[7]="Control - Benny Benassi";/**/
  unPickedSongs[8]="Ready Set Go - Ben Gidsjoy";/**/
  unPickedSongs[9]="College Night - Iman Shumpert";/**/
  unPickedSongs[10]="Young Blood - The Naked...";
  unPickedSongs[11]="Howl - The Gaslight Anthem";

  /*FIXME: Make Shuffle not pick already-picked songs"*/

  /*bucket array*/
  var songChoices = new Array();
  for(var i=0;i<unPickedSongs.length;i++){
    songChoices[i]=0;
  }

  var choice = Math.floor(Math.random()*(unPickedSongs.length));
  while (songChoices[choice]!=0){
    choice = Math.floor(Math.random()*(unPickedSongs.length));
  }
  

  document.getElementById("songChoice").innerHTML = unPickedSongs[choice];
  songChoices[choice]++; 
    /*document.getElementById("songChoice").reset();*/
}
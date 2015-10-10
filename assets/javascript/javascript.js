var playlist = new Array();
var posArray = new Array();
var current = new Array();

posArray[0] = "#one";
posArray[1] = "#two";
posArray[2] = "#three";

playlist[0] = 'Student';
playlist[1] = 'Developer';
playlist[2] = 'Golfer';
playlist[3] = "Programmer";
playlist[4] = "Guitarist";
playlist[5] = "Musician";

current[0] = playlist[0];
current[1] = playlist[1];
current[2] = playlist[2];

setInterval(function(){
	var nextran = Math.floor((Math.random()*6));
	var pos = Math.floor((Math.random()*3));
	change(nextran,pos);
},3000);


function change(next, pos){
	var i = 0;
	while(i < 3){
		if(current[i] == playlist[next]){
			next = Math.floor((Math.random()*6));
			i = 0;
		}
		else
			i++;
	}
	
	$(posArray[pos]).fadeOut(1000,function(){
		$(posArray[pos]).text(function(index,text){
	 return text.replace(text,playlist[next]);
	});

	});
	$(posArray[pos]).fadeIn(1000);

	current[pos] = playlist[next];

}


/************************************/

/*
 * Script to change content of the right hand tile when a selectiom is made.
 * Two versions had to be made to accomodate for the second set of tiles titled 'Activities'
 *
*/
$('.skill li').on("click", function(e) {
  var $this = $(this),
      $id = $this.attr('id'),
      $class = '.' + $('.info-' + $id).attr('class').replace('hide', '');
  
  $('.default').addClass('hide');
  $('.info-'+$id).removeClass('hide');
  $('.skill li').removeClass('active');
  $($this).addClass('active');
  $('div[class*=info]').not($class).addClass('hide');
});

$('.perks li').on("click", function(e) {
  var $this = $(this),
      $id = $this.attr('id'),
      $class = '.' + $('.activity-' + $id).attr('class').replace('hide', '');
  
  $('.defaultact').addClass('hide');
  $('.activity-'+$id).removeClass('hide');
  $('.perks li').removeClass('active');
  $($this).addClass('active');
  $('div[class*=activity]').not($class).addClass('hide');
});

/*
 * Url preview script 
 * powered by jQuery (http://www.jquery.com)
 * 
 * written by Alen Grakalic (http://cssglobe.com)
 * 
 * for more info visit http://cssglobe.com/post/1695/easiest-tooltip-and-image-preview-using-jquery
 *
 */
 
this.screenshotPreview = function(){	
	/* CONFIG */
		
		xOffset = 10;
		yOffset = 30;
		
		// these 2 variable determine popup's distance from the cursor
		// you might want to adjust to get the right result
		
	/* END CONFIG */
	$("a.screenshot").hover(function(e){
		this.t = this.title;
		this.title = "";	
		var c = (this.t != "") ? "<br/>" + this.t : "";
		$("body").append("<p id='screenshot'><img src='"+ this.rel +"' alt='url preview' />"+ c +"</p>");								 
		$("#screenshot")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px")
			.fadeIn("fast");						
    },
	function(){
		this.title = this.t;	
		$("#screenshot").remove();
    });	
	$("a.screenshot").mousemove(function(e){
		$("#screenshot")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px");
	});			
};


// starting the script on page load
$(document).ready(function(){
	screenshotPreview();
});

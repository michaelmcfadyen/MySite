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
},5000);


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


$('.perks li').on("click", function(e) {
  var $this = $(this),
      $id = $this.attr('id'),
      $class = '.' + $('.info-' + $id).attr('class').replace('hide', '');
  
  $('.default').addClass('hide');
  $('.info-'+$id).removeClass('hide');
  $('.perks li').removeClass('active');
  $($this).addClass('active');
  $('div[class*=info]').not($class).addClass('hide');
});

$(window).load(function(){

	//ASIGNA SCROLLBAR:


    $("#contenido").mCustomScrollbar({
            scrollButtons:{
                enable: true
            }
    });  
    
	//ANIMACIONES:

	$('#perspectiva .cont-prisma').mouseenter(function(){
	        $(this).children().css('transform','rotateX(-90deg) rotateY(0deg)');

	}).mouseleave(function(){
	        $(this).children().css('transform','rotateX(0deg) rotateY(0deg)');

	});


	$('#persp-social .cont-social').mouseenter(function(){
	        $(this).children().css('transform','rotateX(0deg) rotateY(-180deg) rotateZ(45deg)');

	}).mouseleave(function(){
	        $(this).children().css('transform','rotateX(0deg) rotateY(0deg) rotateZ(-45deg)');

	});


	$('#pie ul').mouseenter(function(){
		$(this).css('transform','scale(1.1)');
	}).mouseleave(function(){$(this).css('transform','scale(1.0)');});


});
/*
var images = $('.foto');
var loaded_images_count = 0;

$('.foto').load(function(){
    loaded_images_count++;
    console.log(loaded_images_count);
    if (loaded_images_count == images.length-1) {
        $(".foto-cont").fadeIn();
        $("#loading").css('display','none');
    }
});

*/
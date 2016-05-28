$(document).ready(function(){

	/*$("#fondo1").pan({fps:20, speed: 1, dir: 'left', depth: 10});*/
	
	$('#btn').click(function(){	
		$('#mensaje').hide('.inicio'); 
		$('#n13').addClass('mas');

		if (contador == 1) {
			$('#n11').addClass('anima fadeInRightBig');
			$('#n9').addClass('anima2 fadeInLeftBig');
			$('#n13').addClass('anima2 fadeInLeft');
			contador = 1
		}
	});
	$('#n13').click(function(){	(this).remove();});
	$('#n3').click(function(){	(this).remove();});
	$('#n4').click(function(){	(this).remove();});

	$('#btn1').click(function(){	
		$('.siguiente').hide('.siguiente'); 
		$('#nubes').append('<div id="n3"></div>'); /* añade la nube n13 que quitamos antes*/
		$('#nubes').append('<div id="n4"></div>');
		

		if (contador == 1) {
			$('#n4').addClass('animated fadeInRightBig');
			$('#n8').addClass('animated fadeInLeftBig');
			$('#n2').addClass('animated fadeInLeftBig');
			contador = 1
		}
	});
	var contador = 1;

	$('#btn2').click(function CambiarClase(){	
		$('.pantalla').remove(); 
		/*$('.container').append('<div id="dragon"></div>');*/

		if (contador == 1) {
			$('#n1').addClass('anima fadeInRightBig');
			$('#n5').addClass('anima fadeInLeftBig');
			$('#n3').addClass('anima2 fadeInLeftBig');
			contador = 1
		}
		
	});

	
});

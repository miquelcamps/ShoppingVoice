if (annyang) {

	var showResults = function(query){
		document.location = 'https://www.ulabox.com/busca?q=' + encodeURIComponent( query );
	};
	
	var buyItem = function(id){
		if( id == 'uno' ) id = 1;
		
		id = parseInt(id) - 1;
		$('article:eq('+id+') button[type=submit]').click();
	};
	
	var finish = function(){
		document.location = 'https://www.ulabox.com/mi-carrito';
	};

	var commands = {
		'buscar *query':	showResults,
		'comprar *id':		buyItem,
		'terminar':			finish
	};
	
	annyang.debug(); // OPTIONAL: activate debug mode for detailed logging in the console
	annyang.addCommands(commands); // Add voice commands to respond to
	annyang.setLanguage('es'); // OPTIONAL: Set a language for speech recognition (defaults to English)
	annyang.start(); // Start listening. You can call this here, or attach this call to an event, button, etc.

	$(function(){
		if( $('article').size() ){
			$('article').each(function( index ) {
				$( this ).prepend( '<div style="font-size:20px;color:red;text-align:center;">' + ( index + 1 ) + '</div>' );
			});
		}
	});
	
}
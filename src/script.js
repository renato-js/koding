/* 
 author: @natojs
 06/04/2016
 
	controles do sistema
	
*/

$(document).ready(function() {
	
	updateData();
	
	// itens
	var rodaAtual = 1;
	var carAtual = 1;

	// muda carro
	$('#display-car').css('background-image', 'url("img/carro/car1.jpg")');

	// muda roda
	$('#display-roda').css('background-image', 'url("img/roda/roda1.png")');

});


// 
function  mudaRoda(rodaAtual) {
	$('#display-roda').css('background-image', 'url("img/roda/roda'+rodaAtual+'.png")');	
	return false;
}

// 
function mudaCarro(carroAtual) {
	$('#display-car').css('background-image', 'url("img/carro/car'+carroAtual+'.jpg")');	
	return false;
}

// Carregar dados atualizados do banco de dados
function updateData () {
    archivoValidacion = "http://renatojsantos.com.br/koding/update.php?jsoncallback=?"
    $.getJSON( archivoValidacion )
    
    // recupera os dados
    .done(function(respuestaServer) {
		// atualiza caso tenha modificado
		innerHtmlViewCar = respuestaServer.innerHtmlCar; 		
		innerHtmlViewRoda = respuestaServer.innerHtmlRoda; 		
		$("#controle-car").html('<h1>Carros</h1>'+innerHtmlViewCar);
		$("#controle-roda").html('<h1>Rodas</h1>'+innerHtmlViewRoda);
    });		
}

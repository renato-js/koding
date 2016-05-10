/* 
 author: @natojs
 06/04/2016
 
	controles do sistema
	
*/



$(document).ready(function() {
	

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



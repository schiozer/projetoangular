
var qualquerCoisa = true;

if (qualquerCoisa) {
	let nomeVariavel = 'Angular 2';
	var nomeVariavel2 = 'Angular 2';
	alert(nomeVariavel);
}

//console.log(nomeVariavel); // nomeVariavel is not defined
console.log(nomeVariavel2); // nomeVariavel funciona
console.log(qualquerCoisa); // printa no console True;

//Observamos aqui que o var faz global e o let possui escopo


const Fabio = 'Fabio';

function somar(x, y) {
	return x + y;
}
console.log("minha soma é: " + somar(5)); // saída será NaN
// o EC6 introduziu o pipe | que atribui valores em casa variáveis não sejam definidos, como abaixo

function somar2(x, y) {
	y = y | 1;
	return x + y;
}
console.log("minha soma é: " + somar2(5)); // saída será 6

// temos também a presença de default parameters
function somar3(x, y = 1) {
	return x + y;
}
console.log("minha soma é: " + somar3(5)); // saída será 6
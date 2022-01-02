function soma(numero1, numero2) {

	let res = numero1 + numero2;
	return res;
}

console.log(soma(1,2));

let contar = 0;

while(contar < 15){
	console.log(contar + " oi");
	contar++;
}

do{
	console.log("uma vez");
}while(1==0) //esta condição é falsa, mas o código será executado uma vez antes de ela ser verificada.



for(let contar = 0; contar <20; contar+=1){
		console.log(contar);
}
//Exercicios de sintaxe  e operadores;
function comparaNumero(num1, num2){//1° Crie uma função que receba dois numeros como parametros:
    const saoIguais = num1 === num2;//2ºConfira se os numeros são iguais
    const soma = num1 + num2;

    return saoIguais ? "São iguais" : "Não são iguais";//if ternario mais usado dia a dia.

    /*if(saoIguais){
        return "São iguais";
    }
    return "Não são iguais";*/
}
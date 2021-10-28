//Variaveis e tipos, Atribuição de valores
//Exemplos de var e let:
var a = 11;
var b = 2;

if(a === 1){
    var a = 11; //aqui o escopo é global e a variavel foi redeclarada.
    let b = 22;// com let o escopo é em bloco

    console.log(a);//11 por que a variavel foi redeclarada no escopo de bloco.
    console.log(b);//22
}

console.log(a);//11
console.log(b);//2

//outro exemplo:
var firtName = "Maria";
var lastName = "Prado"

if (firtName === "Maria"){ //comparação dentro de ifs com 3 iguais.
    var firstName = "Pedro";
    let lastName = "Silva";
    lastName = "Silva" //isso é uma reatribuição
}
console.log(firstName, lastName);
//Dica quando estivver codando o deal é usar let devido a segurança.

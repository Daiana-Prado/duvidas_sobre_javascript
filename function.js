/*estrutura; Definição comum de uma fubção: Variáveis criadas dentro de uma função,
 apenas podem ser utilizadas dentro dela*/

 function nome (parametros){
// instruções
 }

 function nome (parametros){ //Quando invocamos o "retorno", a função para de ser executada.
//instruções
return; //valor de retorno
 }

 //função anônima
 //São finções q representam expressões;
 const soma = function (a, b) {          //uma variável pode armazenar uma função.
     return a + b;
 }
soma = (1, 2)//3
soma = (5, 4)//9
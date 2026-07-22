function tabuada(){
  var num = parseInt(document.getElementById("num").value);
  var resposta = document.getElementById('resposta');
  var tabuada='';
let numeroBase = parseInt(prompt("Digite o número da tabuada que deseja calcular:"));

  for(var count=1; count<=10 ; count++)
   tabuada += num+" x "+count+" = "+
               num*count+"<br />";
  
  resposta.innerHTML = tabuada;
if (!isNaN(numeroBase)) {
    let resultadoFinal = "";

       for (let i = 1; i <= 10; i++) {
        resultadoFinal += `${numeroBase} x ${i} = ${numeroBase * i}\n`;
    }

       alert(resultadoFinal);
} else {
    alert("Por favor, digite um número válido!");
}
console.log(tabuada);
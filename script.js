// Pede para o usuário digitar um número
let numeroBase = parseInt(prompt("Digite o número da tabuada que deseja calcular:"));

// Verifica se foi digitado um número válido
if (!isNaN(numeroBase)) {
    let resultadoFinal = "";

    // Gera a tabuada até 10
    for (let i = 1; i <= 10; i++) {
        resultadoFinal += `${numeroBase} x ${i} = ${numeroBase * i}\n`;
    }

    // Exibe todos os resultados de uma vez
    alert(resultadoFinal);
} else {
    alert("Por favor, digite um número válido!");
}

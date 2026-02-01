function calculo_imc(){
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    let resultado_imc = peso/(altura * altura);
    let seu_imc = resultado_imc;

    let classificacao = '';
        if (seu_imc < 18.5) {
            classificacao = 'Abaixo do peso';
        } else if (seu_imc >= 18.5 && seu_imc <= 24.9) {
            classificacao = 'Peso normal';
        } else if (seu_imc>= 25 && seu_imc <= 29.9) {
            classificacao = 'Sobrepeso';
        } else if (seu_imc >= 30 && seu_imc <= 34.9) {
            classificacao = 'Obesidade Grau I';
        } else if (seu_imc >= 35 && seu_imc <= 39.9) {
            classificacao = 'Obesidade Grau II (severa)';
        } else {
            classificacao = 'Obesidade Grau III (mórbida)';
        }
    
    
    document.getElementById("resultado").textContent = "Resultado do seu IMC é: " + seu_imc.toFixed(2);
    document.getElementById("classificacao").textContent = "Sua classificação é: " + classificacao;
}

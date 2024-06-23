        function processarNumeros() {
            // Obtém os valores dos inputs
            let a = parseFloat(document.getElementById('numero1').value);
            let b = parseFloat(document.getElementById('numero2').value);

            // Realiza os cálculos
            let soma = a + b;
            let subtracao = a - b;
            let multiplicacao = a * b;
            let divisao = a / b;
            let resto = a % b;

            // Atualiza os resultados no HTML
            document.getElementById('resultadosoma').innerHTML = "Soma: " + soma;
            document.getElementById('resultadosubtracao').innerHTML = "Subtração: " + subtracao;
            document.getElementById('resultadomultiplicacao').innerHTML = "Multiplicação: " + multiplicacao;
            document.getElementById('resultadodivisao').innerHTML = "Divisão: " + divisao.toFixed(2);
            document.getElementById('resultadoresto').innerHTML = "Resto: " + resto;
        }
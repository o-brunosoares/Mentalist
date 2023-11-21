var numeroSecreto = parseInt(Math.random() * 1001);

var contador = 1;

while (chute != numeroSecreto) {
  var chute = prompt("Digite um número entre 1 e 1000");
  if (chute == numeroSecreto) {
    alert(
      "Parabéns! Você descobriu o número secreto com " +
        contador +
        " tentativa(s). Agora tente descobrir com um número menor de tentativas."
    );
  } else if (chute > numeroSecreto) {
    alert(
      "Errou, o número é menor do   que " +
        chute +
        ". Já foram " +
        contador +
        " tentativa(s)"
    );
    contador++;
  } else if (chute < numeroSecreto) {
    alert(
      "Errou, o número é maior do que " +
        chute +
        ". Já foram " +
        contador +
        " tentativa(s)"
    );
    contador++;
  }
}

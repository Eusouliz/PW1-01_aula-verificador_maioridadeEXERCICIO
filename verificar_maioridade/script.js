function verificarIdade() {
  const elementoIdade = document.getElementById("campoIdade");
  const idade = parseInt(elementoIdade.value);

  const elementoNome = document.getElementById("campoNome").value;


  const elementoResposta = document.getElementById("resultado");


  if (isNaN(idade)) {
    elementoResposta.innerText = "Por favor, digite a idade corretamente!";
    elementoResposta.style.color = "#460606ff";

    return;
  }

  
  if (idade >= 18) {
    elementoResposta.innerText = `Olá, ${elementoNome}! Você tem ${idade} anos e seu acesso foi liberado com sucesso.`;
    elementoResposta.style.color = "#04b9b9ff";
    
    console.log(`Verificação aprovada: ${idade} anos (Maior de idade)`);


  } else {
    elementoResposta.innerText = `Acesso negado para ${elementoNome}: você tem ${idade} anos e ainda não possui a idade mínima permitida.`;
    elementoResposta.style.color = "#be7a21ff";
    
    console.log(`Verificação informativa: ${idade} anos (Menor de idade)`);

    return;
  }


  if(idade < 18) {
    const anosRestantes = document.getElementById("campoRestante").value;
    const anosResto = parseInt(anosRestantes.value);
    const resto = anosResto - 18;
    
    document.getElementById("restante").innerText = `Olá, ${elementoNome}! Você tem ${idade} anos e ainda é menor de idade. Faltam ${resto} ano(s) para atingir a maioridade.`;

    console.log(`Se você é menor de idade - Anos restantes: ${resto}.`);
    return;
  }
  
}
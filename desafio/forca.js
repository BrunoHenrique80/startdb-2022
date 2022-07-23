var pontos_de_vida = 6;
var acertos = 0;
var tentativas = "";

var c = document.getElementById("Forca");
var ctx = c.getContext("2d");


  function adicionarTentativas() {
    if(!tentativas.includes(event.key)){
      tentativas = tentativas + event.key;
      ctx.font = "20px Arial";
      ctx.fillText("Tentativas: " + tentativas.toUpperCase(),20,280);
    }
  }
class Forca {

 chutar(letra) { 
    if(!tentativas.includes(event.key) && palavraSecreta.includes((event.key).toUpperCase())){
     adicionarTentativas();
      for(var i = 0; i < palavraSecreta.length;i++){
        if(palavraSecreta[i] == (event.key).toUpperCase()){
          ctx.fillText((event.key).toUpperCase(),20+(35* i),200);
        }
      }
      }else{      
      adicionarTentativas();
      pontos_de_vida--;
    }
    this.buscarEstado();
  }


  buscarEstado() {
  if(pontos_de_vida == 0){
    ctx.font = "20px Arial";
    ctx.fillText=("Perdeu! A palavra secreta era: "+palavraSecreta,200,100);
    return;
    }
    else{
      if (acertos == palavraSecreta.length){
       ctx.font = "20px Arial";
       ctx.fillText=("Ganhou!",200,100);
       window.onkeypress = null;
      return;
      }
    }
  
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas: [tentativas], // Deve conter todas as letras chutadas
          vidas: this.chutar(letra), // Quantidade de vidas restantes
          palavra: [letra] // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;

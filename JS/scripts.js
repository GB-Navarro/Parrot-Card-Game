let numeroDeCartas = 0
let container = document.querySelector(".cardsContainer");

do{
    variavelDeControle = prompt("Com quantas cartas você quer jogar ?");
    if(parseInt(variavelDeControle) > 14 || parseInt(variavelDeControle) <= 0){
        alert("O número máximo de cartas possível é 14 e o número mínimo de cartas é 2, tente novamente")
        /*Quando cai nessa opção, o while para. Corrigir isso*/
    }else{
        numeroDeCartas = parseInt(variavelDeControle);
    }
}while(numeroDeCartas%2 != 0);

function adicionarCartas(){
    for(let contador = 0; contador < numeroDeCartas; contador ++){
        container.innerHTML += 
        '<div class="box"> <img src="Imagens/front.png"/> </div>';
    }
}

adicionarCartas();
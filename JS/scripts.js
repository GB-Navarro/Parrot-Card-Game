let numeroDeCartas = 0
let cardsContainer = document.querySelector(".cardsContainer");
let arrayCartasTraseiras = ['<div><img src="Imagens/bobrossparrot.gif"/></div>','<div><img src="Imagens/explodyparrot.gif"/></div>','<div><img src="Imagens/fiestaparrot.gif"/></div>','<div><img src="Imagens/metalparrot.gif"/></div>','<div><img src="Imagens/revertitparrot.gif"/></div>','<div><img src="Imagens/tripletsparrot.gif"/></div>','<div><img src="Imagens/unicornparrot.gif"/></div>','<div><img src="Imagens/fiestaparrot.gif"/></div>','<div><img src="Imagens/explodyparrot.gif"/></div>','<div><img src="Imagens/tripletsparrot.gif"/></div>','<div><img src="Imagens/bobrossparrot.gif"/></div>','<div><img src="Imagens/revertitparrot.gif"/></div>','<div><img src="Imagens/unicornparrot.gif"/></div>','<div><img src="Imagens/metalparrot.gif"/></div>'];
let boxArray = document.querySelectorAll(".box");

do{
    variavelDeControle = prompt("Com quantas cartas você quer jogar ?");
    if(parseInt(variavelDeControle) > 14 || parseInt(variavelDeControle) <= 0){
        alert("O número máximo de cartas possível é 14 e o número mínimo de cartas é 2, tente novamente")
        /*Ajustar o break que ocorre quando o if é satisfeito*/
    }else{
        numeroDeCartas = parseInt(variavelDeControle);
    }
}while(numeroDeCartas%2 != 0);

function adicionarCartasFrontais(){
    for(let contador = 0; contador < numeroDeCartas; contador ++){
        cardsContainer.innerHTML += 
        '<div class="box" onclick="adicionarCartasTraseiras()"> <img src="Imagens/front.png"/> </div>';
    }
}

adicionarCartasFrontais();

function embaralharCartasTraseiras(){
    return Math.random() - 0.5; 
}
arrayCartasTraseiras.sort(embaralharCartasTraseiras);

function virarAsCartas(){
    for(let i = 0; i < boxArray.length; i++){
        boxArray[i].innerHTML = arrayCartasTraseiras[i];
    }
}
function adicionarCartasTraseiras(){
    for(let i = 0; i < boxArray.length; i++){
        boxArray[i].addEventListener("click",virarAsCartas())
    }
}


adicionarCartasTraseiras();

let numeroDeCartas = 0
let cardsContainer = document.querySelector(".cardsContainer");
let arrayCartasTraseiras = ['bobrossparrot.gif','explodyparrot.gif','fiestaparrot.gif','metalparrot.gif','revertitparrot.gif','tripletsparrot.gif','unicornparrot.gif','bobrossparrot.gif','explodyparrot.gif','fiestaparrot.gif','metalparrot.gif','revertitparrot.gif','tripletsparrot.gif','unicornparrot.gif'];

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
        '<div class="box" onclick="adicionarCartasTraseiras()"> <img src="Imagens/front.png" class="front-face"/> <img src="Imagens/${img}" class="back-face"/> </div>';
    }
}
adicionarCartasFrontais();

let boxArray = document.querySelectorAll(".box .back-face");
console.log(boxArray);

function embaralharCartasTraseiras(){
    return Math.random() - 0.5; 
}
arrayCartasTraseiras.sort(embaralharCartasTraseiras);

function adicionarCartasTraseiras(){
    for(let i = 0; i < boxArray.length; i++){
        boxArray[i].innerHTML = `<img src= Imagens/${arrayCartasTraseiras[i]}/>`
    }
}
adicionarCartasTraseiras();
console.log(boxArray);
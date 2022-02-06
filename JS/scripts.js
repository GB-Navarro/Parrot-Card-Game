let numeroDeCartas = 0
let main = document.querySelector("main");
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

function embaralharCartasTraseiras(){
    return Math.random() - 0.5; 
}
arrayCartasTraseiras.sort(embaralharCartasTraseiras)

function adicionarCartasFrontais(){
    for(let i = 0; i < numeroDeCartas; i ++){
        main.innerHTML += 
        `<div class="cardsContainer">
            <div class="face frontFace" onclick"virarCartas()">
                <img src="Imagens/front.png"/>
            </div>
            <div class="face backFace">
                <img src="Imagens/${arrayCartasTraseiras[i]}"/>
            </div>
        </div>`
    }
}
adicionarCartasFrontais();

let cardsContainer = document.querySelector(".cardsContainer");
let frontFace = document.querySelector(".frontFace");
let backFace = document.querySelector(".backFace");


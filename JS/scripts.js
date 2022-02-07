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
arrayCartasTraseiras.sort(embaralharCartasTraseiras);

function adicionarCartasFrontais(){
    for(let i = 0; i < numeroDeCartas; i ++){
        main.innerHTML += 
        `<div class="cardsContainer" onclick="virarCartas(children)" data-identifier="card">
            <div class="face frontFace" data-identifier="front-face">
                <img src="Imagens/front.png"/>
            </div>
            <div class="face backFace" data-identifier="back-face">
                <img src="Imagens/${arrayCartasTraseiras[i]}"/>
            </div>
        </div>`;
    }
}
adicionarCartasFrontais();

function virarCartas(cards){

    let varControle = 0;
    let arrayControle = [];
    let j = 0;
    
   
    let mainPovoado = document.querySelectorAll(".cardsContainer");

    for(let i = 0; i < mainPovoado.length; i++){
        if((((mainPovoado[i].childNodes[1]).classList.contains("front")) === true) && (((mainPovoado[i].childNodes[3]).classList.contains("back")) === true)){
            arrayControle[j] = i; //Guardar em qual indice está a classe
            varControle = varControle + 1;
            j = j + 1;
        }    
    }
    if(varControle < 2){
        cards[1].classList.toggle("back");
        cards[0].classList.toggle("front");
    }
    console.log(mainPovoado[arrayControle[0]]);
    if((arrayControle[0] != undefined && arrayControle[1] != undefined) && (mainPovoado[arrayControle[0]] != mainPovoado[arrayControle[1]])){
        (mainPovoado[arrayControle[0]].childNodes[1]).classList.remove("front");
        (mainPovoado[arrayControle[0]].childNodes[3]).classList.remove("back");
        (mainPovoado[arrayControle[1]].childNodes[1]).classList.remove("front");
        (mainPovoado[arrayControle[1]].childNodes[3]).classList.remove("back");
    }else if((arrayControle[0] != undefined && arrayControle[1] != undefined) && (mainPovoado[arrayControle[0]] === mainPovoado[arrayControle[1]])){
        mainPovoado[arrayControle[0]].innerHTML = `teste`;
        mainPovoado[arrayControle[0]].innerHTML = `teste`;            
    }
}

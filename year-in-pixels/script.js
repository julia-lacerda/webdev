function colorir(event){
    let card = document.getElementsByClassName('moods')
    card.moods.style.display = "flex"
}

function coloreQuadrado(){
    let pixel = document.getElementById('1-1-2022');
    pixel.style.backgroundColor = "green";
}

// function initGame() {
//     for (let i = 0; i < cards.length; i++) {
//         // criar um elemento novo e coloca ele no game panel
//         const card = document.createElement("img");
//         card.setAttribute("src", "images/blank.png");
//         card.addEventListener(
//             "click",
//             listener //função de virar a carta
//         );
//         card.setAttribute("id", i); //bota um id para cada carta
//         gamePanel.appendChild(card); //bota na div
//     }
// }